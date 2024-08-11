import React from 'react'
import DownArrow from '../../../assets/Logo/DownArrow'
import DefaultProfile from '../../../assets/Logo/DefaultProfile'

import './Avatar.css'

export default function Avatar({img,name,username}) {
  return (
        <div className="avatar mx-2 flex justify-center items-center cursor-pointer">
            <DownArrow className={'downArrow'}/>
            {
              img? 
              <img className='overflow-hidden rounded-full w-10 mr-2' src={img} alt="" srcset="" />
              :
              <DefaultProfile className={'dfImage'}/>
            }
            
            <div className="profile flex flex-col justify-center items-start text-[#ffffff] my-0">
                <div className="text-xs">Hello,</div>
                <div className="name font-bold text-sm">{name}</div>
            </div>
        </div>
  )
}
