import React from 'react'
import DownArrow from '../../../assets/Logo/DownArrow'
import UpArrow from '../../../assets/Logo/UpArrow'
import DefaultProfile from '../../../assets/Logo/DefaultProfile'
import RightArrow2 from '../../../assets/Logo/RightArrow2'

import './Avatar.css'

export default function Avatar({img,mode,name,onClick,dropdown}) {
  return (
        <div className="avatar lg:mx-2 flex justify-center items-center cursor-pointer lg:ml-3 lg:bg-transparent md:bg-transparent bg-black px-4 py-3.5 rounded-md w-[92%]" onClick={onClick}>
            {
              dropdown?
              <UpArrow className={`downArrow hidden lg:block ${mode==='dark' ? 'text-white':'text-black'}`}/>
              :
              <DownArrow className={`downArrow hidden lg:block ${mode==='dark' ? 'text-white':'text-black'}`}/>
            }
            {
              img? 
              <img className='rounded-full w-9 h-9 mr-2 object-cover' src={img} alt="" srcset="" />
              :
              <DefaultProfile className={`dfImage w-8 h-8 ${mode=='dark'?'text-white':'text-black'}`}/>
            }
            
            <div className={`profile flex flex-col justify-center items-start ${mode==='dark' ? 'text-white':'lg:text-black text-white'} my-0 `}>
                <div className="text-xs">Hello,</div>
                <div className="name font-bold text-sm">{name}</div>
            </div>
            <div className="rightArrow ml-4">
              <RightArrow2 className={`downArrow block lg:hidden text-white`}/>
            </div>
        </div>
  )
}
