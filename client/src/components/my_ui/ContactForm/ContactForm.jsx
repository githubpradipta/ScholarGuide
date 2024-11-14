import React, { useState } from 'react'
import '../Input/Input'
import './ContactForm.css'
import RightArrow from '../../../assets/Logo/RightArrow'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formdata,setFormData] = useState({});
  const [formLoading,setFormLoading] = useState(false);

  const getFormData = (e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]:value,
    })
  }

  const submit = ()=>{
    setFormLoading(true);
    axios.post('http://localhost:8000/user/feedback',formdata)
    .then(res=>{
      setFormLoading(false);
      const data = res.data.message
      Swal.fire({
        title:data.title,
        text:data.text,
        icon:'success',
        confirmButtonText:'ok'
      })
    })
    .catch(err=>{
      setFormLoading(false);
      Swal.fire({
        title:"Server Error",
        text:"Please check your internet connectivity and try again",
        icon:'error',
        confirmButtonText:'ok'
      })
    })    
  }

  return (
    <div className="contactForm w-full md:w-3/4 lg:w-1/2 md:mx-auto flex flex-col items-center">
        <div className="input w-full grid grid-row-3 gap-2">
        <input type="text" placeholder='Name' name='name' className='' onChange={(e)=>{getFormData(e)}}/>
        <input type="email" placeholder='E-mail' name='email'  onChange={(e)=>{getFormData(e)}}/>
        <textarea className='h-10 min-h-10 max-h-60' name="query" placeholder='Your Query' id="" onChange={(e)=>{getFormData(e)}}/>
        </div>
        <button className='bg-[#FA8635]' onClick={()=>{submit()}}>{formLoading?'Sending...': 'Send'}</button>

    </div>
  )
}


