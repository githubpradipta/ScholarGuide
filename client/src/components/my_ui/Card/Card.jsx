import React from 'react'
import './Card.css'
import ArrowUpRight from '../../../assets/Logo/ArrowUpRight'

export default function Card({title,desc,link}) {
    return (
        <div className="card mx-6 rounded-md overflow-hidden relative shadow-inner">
            
             <img src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?size=626&ext=jpg" alt="" srcset="" />
        
            <div className="cardtext px-6 py-4 absolute top-0 h-full w-full flex flex-col justify-end items-start">
                <h1 className='text-md font-extrabold'>{title}</h1>
                <text className='font-normal text-sm text-white text-left mr-20 mb-3'>{desc.substring(1,50)}...</text>
                <button className='cardbtn text-white' >Click Here <ArrowUpRight/> </button>
            </div>
        </div>
    )
}
