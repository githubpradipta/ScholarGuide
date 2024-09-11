import React, { useEffect,useState } from 'react'
import RightArrow from '../../assets/Logo/RightArrow'
import RegisterImage from '../../assets/Images/RegisterImage.svg'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'




export default function Register() {
    const navigate = useNavigate();
    const [formData, useFormData] = useState({fullname:"",username:"",email:"",department:"",year:"",password:""});
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);

    //    form validation
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
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.username){
            error.username="Email/@Username is required";
        }
        if(!values.password){
            error.password="Password is required";
        }
        else if(values.password.length <= 7){
            error.password="Password length should be at least 8 characters";
        }
        if(!values.fullname){
            error.fullname="Name is required";
        }
        if(!values.email){
            error.email="Email is required";
        }
        else if(!regex.test(values.email)){
            error.email="Plese enter a valid email id"
        }
        if(!values.department){
            error.department="Department is required";
        }
        if(!values.year){
            error.year="Year is required";
        }
        return error;
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length==0 && isSubmit){
            axios.post('http://localhost:8000/user/signup',formData)
            .then((res)=>{
                let data = res.data;
                console.log(res.status);
                
                Swal.fire({
                    text: `${data.message}`,
                    icon: 'success',
                    confirmButtonText: 'Login'
                  })
                  .then(()=>{
                    navigate('/signin')
                  })
            })
            .catch(err =>{
                const data = err.response.data;

                Swal.fire({
                    text: `${data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
        }

        
    },[formErrors])

    

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

                    <div className={`input-box flex justify-center items-center md:w-4/5 ${formErrors.fullname? 'border-[#FF0F15]':''}`}>
                        <input type="text" className='px-4 py-3 w-full' name='fullname' placeholder='Full Name' onChange={takeInput}/>
                    </div>
                    <p className="text-xs text-[#FF0F15]">{formErrors.name}</p>

                    <div className={`input-box flex justify-center items-center md:w-4/5 ${formErrors.username? 'border-[#FF0F15]':''}`}>
                        <input type="text" className='px-4 py-3 w-full' name='username' placeholder='@Username' onChange={takeInput}/>
                    </div>
                    <p className="text-xs text-[#FF0F15]">{formErrors.username}</p>

                    <div className={`input-box flex justify-center items-center md:w-4/5 ${formErrors.email? 'border-[#FF0F15]':''}`}>
                        <input type="email" className='px-4 py-3 w-full' name='email' placeholder='Email' onChange={takeInput}/>
                    </div>
                    <p className="text-xs text-[#FF0F15]">{formErrors.email}</p>

                    <div className={`input-box flex justify-center items-center md:w-4/5 ${formErrors.branch? 'border-[#FF0F15]':''}`}>
                        <input type="text" className='px-4 py-3 w-full' name='department' placeholder='Department Name' onChange={takeInput}/>
                    </div>
                    <p className="text-xs text-[#FF0F15]">{formErrors.branch}</p>

                    <div className={`input-box flex justify-center items-center md:w-4/5 ${formErrors.year? 'border-[#FF0F15]':''}`}>
                        <input type="text" className='px-4 py-3 w-full' name='year' placeholder='Year' onChange={takeInput}/>
                    </div>
                    <p className="text-xs text-[#FF0F15]">{formErrors.year}</p>
         
                    <div className={`input-box flex justify-center items-center md:w-4/5 ${(formData.password.length > 7) ? 'border-[#17d202]':''} ${formErrors.password? 'border-[#FF0F15]':''}  `}>
                        <input type='password' className='px-4 py-3 w-full' name="password" placeholder='Password' onChange={takeInput}/>
                    </div>
                    <p className="text-xs text-[#FF0F15]">{formErrors.password}</p>

                   
                    <div className="login-btn flex jutify-center items-center font-medium cursor-pointer" onClick={submitForm}>
                        <button className='mr-2'>Submit</button>
                        <RightArrow/>
                    </div>
                    
                    <p className='text-xs'>Have an account? <span className='font-medium' onClick={()=>{navigate('/signin')}}>Sign in</span> </p>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}
