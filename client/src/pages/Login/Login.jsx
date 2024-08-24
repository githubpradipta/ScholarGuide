import React, { useEffect, useState } from 'react'
import EyeOpen from '../../assets/Logo/EyeOpen';
import EyeClose from '../../assets/Logo/EyeClose';
import AtIcon from '../../assets/Logo/AtIcon';
import RightArrow from '../../assets/Logo/RightArrow';
import LoginImage from '../../assets/Images/LoginImage.svg'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'


export default function Login() {
    const [showPass, useShowPass] = useState(false);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [formData, useFormData] = useState({username:"",password:""});

    //toggle password show
    const togglePass = ()=>{
        showPass? useShowPass(false):useShowPass(true);
    }

    //form validation
    const takeInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        useFormData((item)=>{
            return {...item, [name]:value}
        })
        
    }
    const submitForm = ()=>{
        setFormErrors(validate(formData));
        setIsSubmit(true);
    }
    const validate = (values)=>{
        let error = {};

        if(!values.username){
            error.username="Email/@Username is required";
        }
        if(!values.password){
            error.password="Password is required";
        }
        return error;
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length==0 && isSubmit){
            axios.post("http://127.0.0.1:8000/user/signin/",formData)
            .then((res)=>{
                const data = res.data;
                
                localStorage.setItem('auth',JSON.stringify(data.token))
                localStorage.setItem('user',JSON.stringify(data.user))
                navigate('/')
                
            })
            .catch((err)=>{
                const data = err.response.data;
                Swal.fire({
                    text: `${data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
        }
    },[formErrors])


    const navigate = useNavigate();
  return (
    <div className='cradentialBody h-screen flex lg:flex-row flex-col justify-end items-center'>

        <div className="craden-right w-full lg:h-full">
            <img className="w-full h-full" src={LoginImage} alt="image"/>
        </div>
        
        <div className="craden-left w-full lg:h-full py-10 flex flex-col justify-center items-center lg:items-center">

            <div className="craden-box text-center mt-6 py-5 md:w-3/4 lg:flex lg:flex-col lg:justify-center rounded-2xl">

                <div className="left-text font-extrabold">
                    <p className="text-2xl font-extrabold">Welcome Back!</p>
                </div>

                <div className="heading text-3xl font-normal mb-6">Sign In</div>
                <div className="craden-form flex flex-col items-center justify-center">
                    <div className={`input-box flex justify-center items-center md:w-4/5 ${formErrors.username? 'border-[#FF0F15]':''}`}>
                        <input type="text" className='px-4 py-3 w-full' name='username' placeholder='Email/@Username' onChange={takeInput}/>
                        <AtIcon/>
                    </div>
                    <p className='text-xs text-[#FF0F15]'>{formErrors.username}</p>
        
                    <div className={`input-box pass flex justify-center items-center md:w-4/5 ${formErrors.password? 'border-[#FF0F15]':''}`}>
                        <input type={showPass?'text':'password'} className='px-4 py-3 w-full' name="password" placeholder='Password' onChange={takeInput}/>
                        <div className="pass-icon" onClick={togglePass}>{showPass? <EyeOpen/>:<EyeClose/>}</div>
                    </div>
                    <p className='text-xs text-[#FF0F15]'>{formErrors.password}</p>

                    <div className="forgetBox w-full flex justify-start mt-4">
                        <p className="forgetPass text-xs font-bold ml-14 cursor-pointer">Forget Password?</p>
                    </div>

                    <div className="login-btn flex justify-center items-center font-medium cursor-pointer" onClick={submitForm}>
                        <button className='mr-2'>Sign In</button>
                        <RightArrow/>
                    </div>

                    <p className='text-xs'>Don't have an account? <span className='font-medium' onClick={()=>{navigate('/signup')}}>Sign Up</span> </p>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
