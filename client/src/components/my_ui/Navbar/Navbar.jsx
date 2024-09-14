import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import CollapsLogo from '../../../assets/Logo/CollapsLogo'
import DownIcon from '../../../assets/Logo/DownIcon'
import brandImage from '../../../assets/Images/BrandImage.png'
import LoginIcon from '../../../assets/Logo/LoginIcon'
import Avatar from '../Avatar/Avatar'

//temp
// import img from "C:/Users/pradi/Desktop/Own/Profile Pics/Pradipta_Banerjee_Profile.png"
import DropdownProfile from '../DropdownProfile/DropdownProfile'
import BrandLogo from '../../../assets/Logo/BrandLogo'

export default function Navbar({mode}) {
    const [collaps,setCollaps] = useState('uncollaps');
    const [user,setUser] = useState(null);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    const [dropdownProfile,setDropdownProfile] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        window.addEventListener('resize',()=>{
          setScreenWidth(window.innerWidth);
        })
        console.log(screenWidth);
        
      },[screenWidth])
    const collapsNav = ()=>{
        collaps=='uncollaps'? setCollaps('collaps'):setCollaps('uncollaps');
    }
    const toggleDropdownProfile = ()=>{
        if(screenWidth<=820) {
            setDropdownProfile(false);
            navigate('/profile');
        }

        else 
            dropdownProfile? setDropdownProfile(false) : setDropdownProfile(true);
    }
    

    useEffect(()=>{
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
      },[])
    

    
    
  return (
    <div className={`navbar px-6 py-3 lg:px-12 ${mode === 'dark' ? 'bg-[#191919]' : 'bg-[#ffffff]'}`}>
        <Link to={'/home'} className={`brand ${mode} flex items-center justify-left`}>
            <img src={brandImage} alt="" className='w-[8rem] md:w-[10rem]' />
        </Link>
        <div className={`navContent ${collaps} px-4 lg:p-0`}>
        <div className="links">
            <ul>
                <li><Link to={'/home'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'}`}>Home</Link></li>
                <li><Link to={'/notes'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'}`}>Notes</Link></li>
                <li><Link to={'/upload'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'}`}>Upload</Link></li>
                <li><Link to={'/review'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'} hidden`}>Review</Link></li>
            </ul>
        </div>
        <div className="right flex items-center justify-center w-full">
            {
                user?
                <>
                 <Avatar img={user.profile_url} dropdown={dropdownProfile}mode={mode}name={user.fullname.split(' ')[0]} username={user.username} onClick={()=>{toggleDropdownProfile()}}/>
                 {dropdownProfile ? <DropdownProfile className='hidden lg:flex'/>:<></>}
                </>
                :
                <>
                <button className='w-[92%] lg:w-auto py-4 px-6 lg:py-2 lg:mx-1 lg:px-6 my-1 border border-black lg:border-[#656565] lg:hover:border-[#ffb300] rounded-md lg:rounded-[8px] bg-[#191919] lg:hover:bg-[#ffc53c3b] text-white text-[13px] lg:hover:text-[#ffb300] font-semibold transition-all duration-200 ease' onClick={()=>navigate('/signin')}>Sign in</button>
                <button className='w-[92%] lg:w-auto py-4 px-6 lg:py-2 lg:mx-1 lg:px-10 my-1 border border-black lg:border-[#ffb300] rounded-md lg:rounded-[8px] bg-[#191919] lg:bg-[#ffb300] lg:hover:bg-[#ffc53c] text-white lg:text-[#191919] text-[13px] font-semibold transition-all duration-150 ease' onClick={()=>navigate('/signup')}>Sign up</button>
                </>
                
            }
        <hr className='w-full mt-6 bg-[#191919] opacity-40 lg:hidden'/>
            
        </div>
        </div>
        
        <div className={`collapsIcon`} onClick={collapsNav}>{collaps=='uncollaps'?<CollapsLogo mode={mode}/>:<DownIcon mode={mode}/> }</div>

    </div>
  )
}
