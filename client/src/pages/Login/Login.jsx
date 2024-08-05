import React, { useState } from 'react'
import EyeOpen from '../../assets/Logo/EyeOpen';
import EyeClose from '../../assets/Logo/EyeClose';
import AtIcon from '../../assets/Logo/AtIcon';
import RightArrow from '../../assets/Logo/RightArrow';
import LoginImage from '../../assets/Images/LoginImage.svg'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [showPass, useShowPass] = useState(false);
    const togglePass = ()=>{
        showPass? useShowPass(false):useShowPass(true);
    }
    const navigate = useNavigate();
  return (
    <div className='cradentialBody h-screen flex lg:flex-row flex-col justify-end items-center'>

        <div className="craden-right w-full lg:h-full">
            <img className="w-full h-full" src={LoginImage} alt="image"/>
        </div>
        
        <div className="craden-left w-full lg:h-full py-10 flex flex-col justify-center items-center lg:items-center">

            <div className="craden-box text-center my-6 py-5 md:w-3/4 lg:flex lg:flex-col lg:justify-center rounded-2xl">

                <div className="left-text font-extrabold">
                    <p className="text-2xl font-extrabold">Welcome Back!</p>
                </div>

                <div className="heading text-3xl font-normal mb-6">Sign In</div>
                <div className="craden-form flex flex-col items-center justify-center">
                    <div className="input-box flex justify-center items-center md:w-4/5">
                        <input type="text" className='px-4 py-3 w-full' name='userName' placeholder='Email/@Username' />
                        <AtIcon/>
                    </div>
        
                    <div className="input-box pass flex justify-center items-center md:w-4/5">
                        <input type={showPass?'text':'password'} className='px-4 py-3 w-full' name="passWord" placeholder='Password' />
                        <div className="pass-icon" onClick={togglePass}>{showPass? <EyeOpen/>:<EyeClose/>}</div>
                    </div>

                    <div className="forgetBox w-full flex justify-start">
                        <p className="forgetPass text-xs font-bold ml-14 cursor-pointer">Forget Password?</p>

                    </div>

                    <div className="login-btn flex font-medium">
                        <button>Sign In</button>
                        <RightArrow/>
                    </div>

                    <p className='text-xs'>Don't have an account? <span className='font-medium' onClick={()=>{navigate('/signup')}}>Sign Up</span> </p>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
