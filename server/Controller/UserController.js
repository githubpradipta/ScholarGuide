const { UserModel } = require('../Model/DB');
const bcrypt = require('bcrypt');
const HttpError = require("standard-http-error")
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secretKey = "nsdjeh83849"



const registerUser = async(req,res,next)=>{
    const { fullname, username, email, branch, year, password } = req.body;
    
    try{
        const DBuser = await UserModel.findOne({$or:[{username:username},{email:email}] })
        
        if(DBuser){
            return next(new HttpError(404,"Sorry this username or email is already exist !!!"));
        }
        
        const hash = await bcrypt.hash(password, 10 );
        const result = await UserModel.create({
            fullname,
            username,
            email,
            branch,
            year,
            password:hash
        })

       return res.status(200).json({
            message:"Thank you for registering"
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    
    
}

const loginUser = async(req,res,next)=>{
    const { username, password } = req.body;

    try{
        user = await UserModel.findOne({username:username})
        
        if(!user){
           return next(new HttpError(401,"username or password is wrong"))
        }
        
        const check_password = await bcrypt.compare(password, user.password);

        if(!check_password){
            return next(new HttpError(401,"username or password is wrong"))
        }
        else{
            user.password = undefined;
            //generate jwt token
            const token = jwt.sign(
                {user},
                secretKey, //process.env
                {
                    expiresIn:'2h'
                }
            )
            //cookie section
           const options = {
                expires: new Date(Date.now()+24*60*60*1000),
                httpOnly:true,
           }
    
            res.status(201).json({
                token,
                user,
            })
            
        }
    }
    catch(err){
        return next(new HttpError(500,err.message))
    }
}

const logOut = (req,res,next)=>{
    res.clearCookie('token',{path:'/'});
    res.status(201).json({
        message:"Successfully logged out"
    })
}

module.exports={
    registerUser,
    loginUser,
    logOut,
}