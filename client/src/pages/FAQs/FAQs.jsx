import React from 'react'
import LeftArrow from '../../assets/Logo/LeftArrow'
import { useNavigate } from 'react-router-dom'
import FAQImg from '../../assets/Images/FAQs.svg'
import ManualImg from '../../assets/Images/manual.svg'

import FAQAccordion from '../../components/my_ui/FAQAccordion/FAQAccordion'

export default function FAQs() {
    const navigate = useNavigate();
  return (
    <div className='faqs px-2 pt-6 min-h-screen flex flex-col items-center'>
      <header className='flex items-center w-full'>
        <div className="cursor-pointer" onClick={()=>{navigate(-1)}}><LeftArrow/></div>
        <h1 className="text-2xl font-medium pr-4 flex-1 text-center">FAQs</h1>
      </header>

      <div className="container flex flex-col w-full">
        <div className="top flex flex-col items-center">
            <img src={FAQImg} alt="" srcset="" className='w-[80%] md:w-[50%] lg:w-[20%]'/>
            <div className="text text-center mt-4">
                <h1 className='text-orange-500 text-2xl font-semibold'>
                Frequently Asked Questions</h1>
                <p className="text-sm px-4 mt-4 text-slate-400">Find quick answers to common questions and solutions to common issues</p>
            </div>
        </div>

        <div className="content">
            <FAQAccordion/>
        </div>

      </div>
    </div>
  )
}
