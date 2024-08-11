import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import CollapsLogo from '../../../assets/Logo/CollapsLogo'
import DownIcon from '../../../assets/Logo/DownIcon'
import BrandIcon from '../../../assets/Logo/BrandIcon'
import LoginIcon from '../../../assets/Logo/LoginIcon'
import Avatar from '../Avatar/Avatar'

//temp
import img from "C:/Users/pradi/Desktop/Own/Profile Pics/Pradipta_Banerjee_Profile.png"

export default function Navbar({mode}) {
    const [collaps,setCollaps] = useState('uncollaps')
    const [isLogin,setIsLogin] = useState(false);
    const navigate = useNavigate();

    const collapsNav = ()=>{
        collaps=='uncollaps'? setCollaps('collaps'):setCollaps('uncollaps');
    }


  return (
    <div className={`navbar px-6 py-3 lg:px-12 ${mode === 'dark' ? 'bg-[#191919]' : 'bg-[#ffffff]'}`}>
        <Link to={'/home'} className={`brand ${mode} flex items-center justify-left`}>
            <BrandIcon className={`BrandIcon`}/>
            <p className={`brandName text-${mode=='dark'?'white':'black'} text-xl font-bold mx-1`}>Scholar<span className='text-[#fff643]'>Guide</span></p>
        </Link>
        <div className={`navContent ${collaps}`}>
        <div className="links">
            <ul>
                <li><Link to={'/home'} className={`text-${mode=='dark'?'[#a4a4a4]':'[#191919]'}`}>Home</Link></li>
                <li><Link to={'/notes'} className={`text-${mode=='dark'?'[#a4a4a4]':'[#191919]'}`}>Notes</Link></li>
                <li><Link to={'/upload'} className={`text-${mode=='dark'?'[#a4a4a4]':'[#191919]'}`}>Upload</Link></li>
            </ul>
        </div>
        <div className="right flex items-center">
            {
                isLogin? <Avatar img={img} name={'Pradipta'} username={'pro08'}/>
                :
                <>
                <Button flex={true} varient={'outlined'} color={mode=='dark'?'lightbtn':'darkbtn'} className={'login'} onClick={()=>{navigate('/signin')}}>Sign In<LoginIcon/></Button>
                <Button varient={'filled'} onClick={()=>{navigate('/signup')}}>Sign Up </Button>
                </>
            
            }
            
        </div>
        </div>
        
        <div className="collapsIcon" onClick={collapsNav}>{collaps=='uncollaps'?<CollapsLogo/>:<DownIcon/>}</div>

    </div>
  )
}
