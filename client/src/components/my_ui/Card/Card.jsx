import React from 'react'
import './Card.css'
import ArrowUpRight from '../../../assets/Logo/ArrowUpRight'
import { Link } from 'react-router-dom'

export default function Card({blog}) {
    return (
        <div className="card mx-6 rounded-xl h-[230px] overflow-hidden relative shadow-inner">
            
             <img src={blog.img_url} alt="" srcset="" className='h-full w-full object-cover' />
        
            <div className="cardtext px-6 py-4 absolute top-0 h-full w-full flex flex-col justify-end items-start">
                <h1 className='text-md font-extrabold'>{blog.title}</h1>
                <text className='font-normal text-[10px] text-white text-left mr-20 mb-3'>{blog.description.substring(0,80)}...</text>
                <Link className='cardbtn text-white' to={blog.link_url} target='_blank' >Read More <ArrowUpRight/> </Link>
                
            </div>
        </div>
    )
}
