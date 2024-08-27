import React from 'react'
import '../Input/Input'
import './ContactForm.css'
import DoubleRightArrow from '../../../assets/Logo/DoubleRightArrow'

export default function ContactForm() {
  return (
    <div className="contactForm w-full md:w-3/4 lg:w-1/2 md:mx-auto flex flex-col items-center">
        <div className="input w-full grid grid-row-3 gap-2">
        <input type="text" placeholder='Name' name='Name' className=''/>
        <input type="email" placeholder='E-mail' name='Email' />
        <textarea name="query" placeholder='Your Query' id=""/>
        </div>
        <button className='bg-[#ffcb00]'>Send <DoubleRightArrow/></button>

    </div>
  )
}


