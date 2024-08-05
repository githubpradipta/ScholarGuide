import React from 'react'
import '../Input/Input'
import './ContactForm.css'
import DoubleRightArrow from '../../../assets/Logo/DoubleRightArrow'

export default function ContactForm() {
  return (
    <div className="contactForm w-full flex flex-col items-center">
        <div className="input w-full grid grid-row-3 gap-2">
        <input type="text" placeholder='Name' name='Name' className=''/>
        <input type="email" placeholder='E-mail' name='Email' />
        <textarea name="query" placeholder='Your Query' id=""/>
        </div>
        <button>Send <DoubleRightArrow/></button>

    </div>
  )
}


