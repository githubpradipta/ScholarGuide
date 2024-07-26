import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import BrandLogo from '../../../assets/Logo/BrandLogo.png'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="brand">
            <img src={BrandLogo} alt="Logo" />
        </div>
        <div className="links flex item-center">
            <ul>
                <Link to={'/home'}><li>Home</li></Link>
                <Link><li>Notes</li></Link>
                <Link><li>Upload</li></Link>
            </ul>
        </div>
        <div className="right">
            <Button varient={'outlined'}>Login</Button>
            <Button varient={'filled'}>Quick Try</Button>
        </div>
    </div>
  )
}
