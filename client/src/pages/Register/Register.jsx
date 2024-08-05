import React, { useState } from 'react'
import EyeOpen from '../../assets/Logo/EyeOpen';
import EyeClose from '../../assets/Logo/EyeClose';
import AtIcon from '../../assets/Logo/AtIcon';
import RightArrow from '../../assets/Logo/RightArrow';
import RegisterImage from '../../assets/Images/RegisterImage.svg'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'



export default function Register() {
    const [showPass, useShowPass] = useState(false);
    const togglePass = ()=>{
        showPass? useShowPass(false):useShowPass(true);
    }
    const navigate = useNavigate();
  return (
    <div className='cradentialBody h-screen flex flex-col lg:flex-row justify-end items-center'>

        <div className="craden-right w-full lg:h-full">
        <img className="w-full h-full" src={RegisterImage} alt="image"/>
        </div>

        <div className="craden-left w-full lg:h-full pt-40 flex flex-col justify-center items-center overflow-hidden overflow-y-scroll">


            <div className="craden-box text-center my-6 py-5 md:w-3/4 rounded-2xl">
                <div className="left-text ">
                    <p className="text-xl md:text-2xl font-medium">Welcome to</p>
                </div>

                <div className="heading text-3xl md:text-4xl font-bold mb-6 text-[#fff642]">ScholarGuide</div>
                <div className="craden-form flex flex-col items-center justify-center">

                    <div className="input-box flex justify-center items-center w-4/5">
                        <input type="text" className='px-4 py-3 w-full' name='Name' placeholder='@Username' />
                    </div>

                    <div className="input-box flex justify-center items-center w-4/5">
                        <input type="email" className='px-4 py-3 w-full' name='Email' placeholder='Email' />
                    </div>

                    <div className="input-box flex justify-center items-center w-4/5">
                        <input type="text" className='px-4 py-3 w-full' name='branch' placeholder='Branch Name' />
                    </div>

                    <div className="input-box flex justify-center items-center w-4/5">
                        <input type="text" className='px-4 py-3 w-full' name='year' placeholder='Year' />
                    </div>
        
                    <div className="input-box flex justify-center items-center w-4/5">
                        <input type='password' className='px-4 py-3 w-full' name="passWord" placeholder='Password' />
                    </div>

                   
                    <div className="login-btn flex font-medium">
                        <button>Submit</button>
                        <RightArrow/>
                    </div>
                    
                    <p className='text-xs'>Have an account? <span className='font-medium' onClick={()=>{navigate('/signin')}}>Sign in</span> </p>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}
