import React, { useEffect, useState } from 'react'
import css from './DropdownProfile.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function DropdownProfile({className}) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  

  const logOut = ()=>{
    Swal.fire({
      title:'Want to logout',
      icon: 'warning',
      showConfirmButton:false,
      showDenyButton:true,
      showCancelButton:true,
      cancelButtonText: 'cancel',
      denyButtonText: 'Logout'
    })
    .then((result)=>{
      if(result.isDenied){
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        if(location.pathname=='/'){
          window.location.reload();
        }
        else navigate('/');
      }
      
    })
  }


  return (
    
    <div className={`${css.dropdownmenu} flex-col py-3 ${className}`}>
      <div className="naming mb-2 cursor-pointer px-4" onClick={()=>{navigate('/profile')}}>
        <p className='fullname text-sm font-bold'>{user.fullname.split(' ')[0]}</p>
        <p className='username text-xs font-semibold'>@ {user.username}</p>
      </div>
      <hr/>
      <ul className="flex flex-col items-start">
        <li className='w-full px-4 py-1 hover:bg-[#aeaeae] cursor-pointer' onClick={()=>{navigate('/profile')}}><Link className='font-normal' >Profile</Link></li>
        <li className='w-full px-4 py-1 hover:bg-[#aeaeae] cursor-pointer' onClick={()=>{navigate('profile/saves')}}><Link className='font-normal' >Saves</Link></li>
        <hr />
        <li className='w-full px-2 pt-1'><Link className={`font-bold ${css.logoutBtn}`}onClick={()=>{logOut()}} >Logout</Link></li>
      </ul>
    </div>
  )
}
