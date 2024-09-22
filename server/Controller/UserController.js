const { UserModel } = require('../Model/DB');
const HttpError = require("standard-http-error")
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secretKey = "nsdjeh83849"
const bcrypt = require('bcrypt');
const { uploadOnCloudinary } = require('../Utility/cloudinary.js')
const { generateOTP } = require('../Utility/OTPGenerator')
const { sendOtpEmail } = require('../Utility/mailer.js')
const { hashing } = require('../Utility/hashing.js');



const DemoApi = async (req, res, next) => {
    console.log(req.file);
    res.json({
        message: "ok"
    })

}
const getUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findOne({ _id: id });
        return res.status(200).json(user);
    }
    catch (err) {
        next(new HttpError(500))
    }
}
const registerUser = async (req, res, next) => {
    const { fullname, username, email, department, year, password } = req.body;

    try {
        const DBuser = await UserModel.findOne({ $or: [{ username: username }, { email: email }] })

        if (DBuser) {
            return next(new HttpError(404, "Sorry this username or email is already exist !!!"));
        }

        const hash = await hashing(password);
        const result = await UserModel.create({
            fullname,
            username,
            email,
            department,
            year,
            password: hash
        })

        return res.status(200).json({
            message: "Thank you for registering"
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }


}
const editProfile = async (req, res, next) => {
    const updatedData = req.body;
    const id = req.params.id;

    try {
        const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, { $set: updatedData }, { returnDocument: 'after' });
        return res.json({
            message: "User details updated",
            user: updatedUser
        })
    }
    catch (err) {
        next(new HttpError(500, err));
    }


}
const editProfileImage = async (req, res, next) => {
    const id = req.params.id;

    try {
        const response = await uploadOnCloudinary(req.file.path);
        const img_url = response.secure_url;

        const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, { $set: { profile_url: img_url } }, { returnDocument: 'after' });
        return res.json({
            message: "User details updated",
            user: updatedUser
        })
    }
    catch (err) {
        next(new HttpError(500, err));
    }

}
const deleteOneSave = async (req, res, next) => {
    const userID = req.params.uid;
    const noteID = req.body.noteid;

    try {
        const result = await UserModel.findOneAndUpdate({ _id: userID }, { $pull: { saves: noteID } }, { returnDocument: "after" })

        res.status(201).json(result)

    }
    catch (err) {
        next(new HttpError(500, err))
        // console.log(err);
    }
}
const deleteAllSaves = async (req, res, next) => {
    const userID = req.params.uid;

    try {
        const result = await UserModel.findOneAndUpdate({ _id: userID }, { $set: { saves: [] } }, { returnDocument: "after" })
        res.status(201).json(result);
    }
    catch (err) {
        next(new HttpError(500, err))
        // console.log(err);
    }

}
const editUserLikes = async (req, res, next) => {
    const { id, LikeElement, status } = req.body;

    try {
        if (!status) {
            const result = await UserModel.findOneAndUpdate({ _id: id }, { $push: { likeNotes: LikeElement } }, { returnDocument: 'after' })
            return res.status(201).json(result);

        }
        else {
            const result = await UserModel.findOneAndUpdate({ _id: id }, { $pull: { likeNotes: LikeElement } }, { returnDocument: 'after' })
            return res.status(201).json(result);
        }

    }
    catch (err) {
        return next(new HttpError(500, err))
    }
}
const editUserSaves = async (req, res, next) => {
    const { id, SaveElement, status } = req.body;

    try {
        if (!status) {
            const result = await UserModel.findOneAndUpdate({ _id: id }, { $push: { saves: SaveElement } }, { returnDocument: 'after' })
            return res.status(201).json(result);

        }
        else {
            const result = await UserModel.findOneAndUpdate({ _id: id }, { $pull: { saves: SaveElement } }, { returnDocument: 'after' })
            return res.status(201).json(result);
        }

    }
    catch (err) {
        return next(new HttpError(500, err))
    }
}
const loginUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        user = await UserModel.findOne({ $or: [{ username: username }, { email: username }] })

        if (!user) {
            return next(new HttpError(401, "username or password is wrong"))
        }

        const check_password = await bcrypt.compare(password, user.password);

        if (!check_password) {
            return next(new HttpError(401, "username or password is wrong"))
        }
        else {
            user.password = undefined;
            //generate jwt token
            const token = jwt.sign(
                { user },
                secretKey, //process.env
                {
                    expiresIn: '2h'
                }
            )
            //cookie section
            const options = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.status(201).json({
                token,
                user,
            })

        }
    }
    catch (err) {
        return next(new HttpError(500, err.message))
    }
}
const logOut = (req, res, next) => {
    res.clearCookie('token', { path: '/' });
    res.status(201).json({
        message: "Successfully logged out"
    })
}
const forgetPassword = async (req, res, next) => {
    const { email } = req.body;


    try {
        let user = await UserModel.findOne({ email: email });

        if (user) {
            // If email exists, generate OTP
            const otp = generateOTP();
            user = await UserModel.findOneAndUpdate({ _id: user.id }, { otp: otp }, { new: true });


            // Send OTP using the sendOtpEmail function from mailer.js
            sendOtpEmail(email, otp, async (error, info) => {

                if (error) {
                    console.error('Error sending email: ', error);
                    user = await UserModel.findOneAndUpdate({ _id: user.id }, { otp: undefined }, { new: true });
                    return next(new HttpError(500, "OTP could not able to send check your internet connectivity"))
                }

                return res.status(200).send({ message: `OTP sent to : ${email}`, otp: otp });

            });

        } else {
            // If email doesn't exist, respond with an error
            return next(new HttpError(404, 'Email does not exist'));
        }

    }
    catch (err) {
        return next(new HttpError(500));
    }


}
const verifyOTP = async (req, res, next) => {
    let { otp, newPassword, userId } = req.body;


    try {

        let user = await UserModel.findOne({_id:userId});
    
        
        if (user.otp === otp) {
    
            newPassword = await hashing(newPassword);
            user = await UserModel.findOneAndUpdate({ _id: userId }, { $set: { password: newPassword, otp: null } }, { new: true });
            res.status(200).json({ message: 'Password updated successfully', user: user });

        } else {
            return next(new HttpError(400,'Invalid OTP'));
        }

    }
    catch (err) {
        return next(new HttpError(500));
    }


}

module.exports = {
    getUser,
    registerUser,
    loginUser,
    logOut,
    editUserLikes,
    editUserSaves,
    deleteOneSave,
    deleteAllSaves,
    editProfile,
    editProfileImage,
    DemoApi,
    forgetPassword,
    verifyOTP,
}