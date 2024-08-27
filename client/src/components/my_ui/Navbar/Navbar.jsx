import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import CollapsLogo from '../../../assets/Logo/CollapsLogo'
import DownIcon from '../../../assets/Logo/DownIcon'
import BrandIcon from '../../../assets/Logo/BrandIcon'
import LoginIcon from '../../../assets/Logo/LoginIcon'
import Avatar from '../Avatar/Avatar'

//temp
import img from "C:/Users/pradi/Desktop/Own/Profile Pics/Pradipta_Banerjee_Profile.png"
import DropdownProfile from '../DropdownProfile/DropdownProfile'

export default function Navbar({mode}) {
    const [collaps,setCollaps] = useState('uncollaps')
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
            <BrandIcon className={`BrandIcon`}/>
            <p className={`brandName text-${mode==='dark'?'white':'black'} text-xl font-bold mx-1`}>Scholar<span className='text-[#fff643]'>Guide</span></p>
        </Link>
        <div className={`navContent ${collaps}`}>
        <div className="links">
            <ul>
                <li><Link to={'/home'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'}`}>Home</Link></li>
                <li><Link to={'/notes'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'}`}>Notes</Link></li>
                <li><Link to={'/upload'} className={`${mode=='dark'?'text-[#a4a4a4]':'text-[#191919]'}`}>Upload</Link></li>
            </ul>
        </div>
        <div className="right flex items-center justify-center w-full">
            {
                user?
                <>
                 <Avatar img={img} dropdown={dropdownProfile}mode={mode}name={user.fullname.split(' ')[0]} username={user.username} onClick={()=>{toggleDropdownProfile()}}/>
                 {dropdownProfile ? <DropdownProfile/>:<></>}
                </>
                :
                <>
                <Button flex={true} varient={'outlined'} color={mode=='dark'?'lightbtn':'darkbtn'} className={'login'} onClick={()=>{navigate('/signin')}}>Sign In<LoginIcon/></Button>
                <Button varient={'filled'} onClick={()=>{navigate('/signup')}}>Sign Up </Button>
                </>
            
            }
            
        </div>
        </div>
        
        <div className={`collapsIcon`} onClick={collapsNav}>{collaps=='uncollaps'?<CollapsLogo mode={mode}/>:<DownIcon mode={mode}/> }</div>

    </div>
  )
}
