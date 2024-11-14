import React from 'react'
import { useNavigate } from 'react-router-dom';
import LeftArrow from '../../assets/Logo/LeftArrow'
import GuidelinesImg from '../../assets/Images/Guidelines.svg'
import Guidelines_component from '../../components/Guidelines/Guidelines_component';

export default function Guidelines() {
    const navigate = useNavigate();
  return (
    <div className='guidelines px-2 pt-6 min-h-screen flex flex-col items-center'>

      <header className='flex items-center w-full'>
        <div className="cursor-pointer" onClick={()=>{navigate(-1)}}><LeftArrow/></div>
        <h1 className="text-2xl font-medium pr-4 flex-1 text-center">Guidelines</h1>
      </header>

      <div className="container flex flex-col mt-2">
        <div className="top flex flex-col items-center">
            <img src={GuidelinesImg} alt="" srcset="" className='w-[80%] md:w-[50%] lg:w-[20%]'/>
            <div className="text text-center mt-4">
                {/* <h1 className='text-orange-500 text-2xl font-semibold'>
                Frequently Asked Questions</h1> */}
                <p className="text-sm md:text-[18px] px-4 text-slate-400">Please follow all the Guidelines and rules for getting smooth experience.</p>
            </div>
        </div>

        <div className="content">
            <Guidelines_component/>
        </div>

      </div>

    </div>
  )
}
