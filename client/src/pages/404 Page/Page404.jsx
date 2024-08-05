import React from 'react'
import './Page404.css'
import Image_404 from '../../assets/Images/Image_404.svg'
import RightArrow from '../../assets/Logo/RightArrow'
import { useNavigate } from 'react-router-dom'
export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className="image w-full lg:w-1/3 px-6"><img className='w-full h-full' src={Image_404} alt="" /></div>
      <button className="btn-404 flex" onClick={()=>{navigate('/home')}}>Go Back<RightArrow/></button>
    </div>
  )
}
