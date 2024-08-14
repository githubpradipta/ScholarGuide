import React, { useEffect, useState } from 'react'
import css from './DropdownProfile.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Cookie from 'js-cookie'

export default function DropdownProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  

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
        else navigate('/')
      }
      
    })
  }


  return (
    
    <div className={`${css.dropdownmenu} flex flex-col`}>
      <ul className="flex flex-col items-start gap-2">
        <li><Link>Profile</Link></li>
        <li><Link>Saves</Link></li>
        <hr />
        <li><Link onClick={()=>{logOut()}}>Logout</Link></li>
      </ul>
    </div>
  )
}
