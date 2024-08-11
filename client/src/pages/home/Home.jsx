import React, { useEffect, useState } from 'react'
import './Home.css'
import Button from '../../components/my_ui/Button/Button'
import DBMSIcon from '../../assets/Logo/DBMSIcon'
import Card from '../../components/my_ui/Card/Card';
import Navbar from '../../components/my_ui/Navbar/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Input from '../../components/my_ui/Input/Input'
import ContactForm from '../../components/my_ui/ContactForm/ContactForm'



export default function Home() {
  let typesOfNotes = [
    {
      name: "Computer Fundamentals"
    },
    {
      name: "Data Structure"
    },
    {
      name: "Programing Languages"
    },
    {
      name: "Aptitude"
    }
  ]
  const[screenWidth,setScreenWidth] = useState(window.innerWidth);

  let blogCard = 1;
  if(screenWidth>=768 && screenWidth <= 1024) blogCard = 2;
  if(screenWidth >= 1024) blogCard = 3;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: blogCard,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true
  };
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setScreenWidth(window.innerWidth);
    })
    console.log(screenWidth);
    
  },[screenWidth])
  
  return (
    <>
      <Navbar mode={'dark'}/>
      <div className="homepage flex flex-col">
        <div className="head">
          <div className="head_box">
            <p className='text-5xl'>Grow by Sharing</p>
            <span className='text-7xl font-extrabold'>Notes</span>
            <h1 className='mt-6 text-xl font-bold leading-6'>ScholarGuide helps you to get clear handy notes of any subjects.</h1>
            <div className="headBtn mt-7">
              <Button className='py-3 lg:py-2.5 px-6' varient={'filled'}>Explore</Button>
              <Button className={'py-3 lg:py-2.5 px-6'}varient={'outlined'}>Check Vlogs</Button>
            </div>
          </div>

        </div>

        <div className="notetypes text-center mx-4">

          <div className="textbox px-2 lg:mx-20">
            <h1 className='text-4xl font-bold'>Categories of notes you can refer</h1>
            <p className="text-xl font-bold leading-6 mt-4 px-1 lg:px-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam itaque eius dolorem aliquam, harum ad doloremque doloribus explicabo rem vitae. Ullam, quam ducimus.</p>
          </div>

          <div className="blurBG  typeBox mt-6 lg:mt-10 lg:mx-20 py-10 px-5 grid grid-cols-1 gap-4 lg:grid-cols-2">

            {
              typesOfNotes.map((types) => {
                return (
                  <div className="eachtype py-4 px-2 flex justify-center items-center">
                    <div className="icon"><DBMSIcon /></div>

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

        <div className="blog text-center mt-20 grayBG py-6">
          <div className="textbox mx-4">
            <h1 className='font-bold text-4xl'>Latest Tech Blogs for You</h1>
            <p className='text-xl font-bold leading-6 mt-4 px-1 lg:px-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deserunt.</p>
          </div>
          <div className="slider-container mt-10 py-6">
            <Slider {...settings}>
              {
                typesOfNotes.map((type)=>{
                  return(
                    <Card title={type.name} desc={" This is description "}/>
                  )
                })
              }
            </Slider>

          </div>
        </div>

        <footer className='mx-4 mt-20'>
        <div className="contact  px-2 py-4 text-center">
          <div className="textbox mb-4">
            <h1 className='font-bold text-4xl'>Raise Your Query</h1>
            <p className='text-xl font-bold leading-6 mt-4 px-1 lg:px-14'>Don't hasitate, your feedback makes us perfect</p>
          </div>
          <ContactForm className={'contactForm'}/>
        </div>
        </footer>
        
      </div>
    </>
  )
}
