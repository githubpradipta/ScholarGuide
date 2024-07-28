import React from 'react'
import './Home.css'
import Navbar from '../../components/my_ui/Navbar/Navbar'
import Button from '../../components/my_ui/Button/Button'
import DBMSIcon from '../../assets/Logo/DBMSIcon'
export default function Home() {
  let typesOfNotes=[
    {
      name:"Computer Fundamentals"
    },
    {
      name:"Data Structure"
    },
    {
      name:"Programing Languages"
    },
    {
      name:"Aptitude"
    }
  ]
  return (
    <>
    <Navbar/>
    <div className="homepage flex flex-col items-center">
    <div className="head">
        <div className="head_box">
          <p className='text-5xl'>Grow by Sharing</p>
          <span className='text-7xl font-extrabold'>Notes</span>
          <h1 className='mt-6 text-xl font-bold leading-6'>ScholarGuide helps you to get clear handy notes of any subjects.</h1>
          <div className="headBtn mt-7">
            <Button className="py-4"varient={'filled'}>Explore</Button>
            <Button varient={'outlined'}>Sign in</Button>
          </div>
        </div>

      </div>
    
    <div className="notetypes text-center">

      <div className="textbox px-2 lg:mx-20">
        <h1 className='text-4xl font-bold'>Categories of notes you can refer</h1>
        <p className="text-xl font-bold leading-6 mt-4 px-1 lg:px-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque eius dolorem aliquam, harum ad doloremque doloribus explicabo rem vitae. Ullam, quam ducimus.</p>
      </div>

      <div className="typeBox mt-6 lg:mt-10 lg:mx-20 py-10 px-5 grid grid-cols-1 gap-4 lg:grid-cols-2">

        {
          typesOfNotes.map((types)=>{
            return(
              <div className="eachtype py-4 px-2 flex justify-center items-center">
              <div className="icon"><DBMSIcon/></div>
            
            <div className="catname flex flex-col items-start text-left">
              <h2 className='font-bold text-xl'>{types.name}</h2>
              <p className="desc text-md font-medium">Clear concept of DBMS,CN and OS</p>
              </div>
            </div>
            )
            
          })
        }
        
      </div>
    </div>
    </div>
    
    
    </>
  )
}
