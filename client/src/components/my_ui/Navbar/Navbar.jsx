import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import CollapsLogo from '../../../assets/Logo/CollapsLogo'
import DownIcon from '../../../assets/Logo/DownIcon'
import BrandIcon from '../../../assets/Logo/BrandIcon'
import LoginIcon from '../../../assets/Logo/LoginIcon'

export default function Navbar() {
    const [collaps,setCollaps] = useState('uncollaps')
    const navigate = useNavigate();

    const collapsNav = ()=>{
        collaps=='uncollaps'? setCollaps('collaps'):setCollaps('uncollaps');
    }
  return (
    <div className="navbar px-6 py-3 lg:px-12">
        <Link to={'/home'} className="brand flex items-center justify-left">
            <BrandIcon className="BrandIcon"/>
            <p className="brandName text-white text-xl font-bold mx-1">Scholar<span className='text-[#fff643]'>Guide</span></p>
        </Link>
        <div className={`navContent ${collaps}`}>
        <div className="links">
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link>Notes</Link></li>
                <li><Link>Upload</Link></li>
            </ul>
        </div>
        <div className="right flex items-center">
            <Button flex={true} varient={'outlined'} className={'login'} onClick={()=>{navigate('/signin')}}>Sign In<LoginIcon/></Button>
            <Button varient={'filled'} onClick={()=>{navigate('/signup')}}>Sign Up </Button>
        </div>
        </div>
        
        <div className="collapsIcon" onClick={collapsNav}>{collaps=='uncollaps'?<CollapsLogo/>:<DownIcon/>}</div>

    </div>
  )
}
