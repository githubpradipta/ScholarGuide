const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to send OTP via email
const sendOtpEmail = (email, otp, callback) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`
    };

    transporter.sendMail(mailOptions, callback);
};

module.exports = { 
    sendOtpEmail,
};
