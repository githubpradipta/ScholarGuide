import React, { useEffect, useState } from 'react'
import LeftArrow from '../../assets/Logo/LeftArrow';
import Reset_Password_Img from '../../assets/Images/Forgot_Password.svg'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const OTP = location.state.OTP;
    const [user,setUser] = useState({});

    console.log(OTP);
    

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')));
    },[loading])
    console.log(user);
    
    

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        validatePassword(password, value);
    };

    const validatePassword = (password, confirmPassword) => {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            setIsPasswordValid(false);
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            setIsPasswordValid(false);
        } else {
            setPasswordError('');
            setIsPasswordValid(true);
        }
    };

    const submitReset = () => {
        setLoading(true);

        axios.post('http://localhost:8000/user/reset-password',{newPassword:password, otp:OTP, userId:user._id})
        .then((res)=>{

            localStorage.setItem('user',JSON.stringify(res.data.user));
            setLoading(false);
            
            Swal.fire({
                text:res.data.message,
                icon:"success",
                confirmButtonText:'Continue',
            })
            .then(res=>{
                if(res.isConfirmed) navigate('/profile');
            })
        })
        .catch(err=>{
            setLoading(false);
            // Swal.fire({
            //     text:err.data.message,
            //     icon:"success",
            //     confirmButtonText:'Try Again'
            // })
        })
        
        // Add reset logic here
    };

    return (
        <div className='resetPassword py-4 px-2 bg-slate-50 min-h-screen flex flex-col items-center'>
            <div className="nav bg-transparent w-full flex justify-start mt-4 ml-4">
                <div className="" onClick={() => { navigate(-1) }}>
                    <LeftArrow />
                </div>
            </div>

            <div className="bgImage w-[80%] mt-6">
                <img src={Reset_Password_Img} alt="" />
            </div>

            <div className="content flex flex-col items-center mt-24">
                <div className="heading text-center">
                    <h1 className="text-2xl font-semibold text-yellow-500 mb-1">Reset your password</h1>
                    <p className="text-md font-normal text-slate-400">
                        Please enter your new password below
                    </p>
                </div>

                <div className="form mt-8 w-full px-6">
                    <input
                        type="password"
                        name="password"
                        placeholder="New Password"
                        className="w-full px-6 py-3 rounded-md border-2 border-transparent hover:border-slate-400 bg-slate-200 outline-none font-semibold text-gray-700 placeholder:font-semibold"
                        onChange={(e) => { handlePasswordChange(e) }}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full px-6 py-3 rounded-md border-2 border-transparent hover:border-slate-400 bg-slate-200 outline-none mt-4 font-semibold text-gray-700 placeholder:font-semibold"
                        onChange={(e) => { handleConfirmPasswordChange(e) }}
                    />
                </div>

                <div className="submitBtn w-full px-6">
                    <button
                        className={`w-full text-[#191919] font-semibold px-4 py-3 bg-[#ffb300] mt-6 rounded-md font-medium ${isPasswordValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                        onClick={() => { submitReset() }}
                        disabled={!isPasswordValid}
                    >
                        {loading ? 'Saving...' : 'Reset Password'}
                    </button>
                </div>

                {passwordError && (
                    <p className="text-red-500 text-sm mt-2">
                        {passwordError}
                    </p>
                )}
            </div>
        </div>

    )
}
