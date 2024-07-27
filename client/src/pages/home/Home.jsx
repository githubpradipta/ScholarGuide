import React from 'react'
import './Home.css'
import Navbar from '../../components/my_ui/Navbar/Navbar'
import Button from '../../components/my_ui/Button/Button'
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="head">
        <div className="head_box">
          <p className='text-5xl'>Grow by Sharing</p>
          <span className='text-7xl font-extrabold'>Notes</span>
          <h1 className='mt-5 text-md px-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ab.</h1>
          <div className="headBtn mt-7">
            <Button className="py-4"varient={'filled'}>Explore</Button>
            <Button varient={'outlined'}>Sign in</Button>
          </div>
        </div>
      </div>
    </>
  )
}
