import React, { useEffect, useState } from 'react'
import './Home.css'
import Button from '../../components/my_ui/Button/Button'
import DBMSIcon from '../../assets/Logo/DBMSIcon'
import Card from '../../components/my_ui/Card/Card';
import Navbar from '../../components/my_ui/Navbar/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AboutImage from '../../assets/Images/AboutImage.svg'
// import Input from '../../components/my_ui/Input/Input'
import ContactForm from '../../components/my_ui/ContactForm/ContactForm'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';



export default function Home() {
  const navigate = useNavigate();
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let blogCard = 1;
  if (screenWidth >= 768 && screenWidth <= 1024) blogCard = 2;
  if (screenWidth >= 1024) blogCard = 3;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: blogCard,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    })

  }, [screenWidth])



  return (
    <>
      <Navbar mode={'dark'} />
      <div className="homepage flex flex-col">
        <div className="head">
          <div className="head_box">
            <p className='text-5xl'>Grow by Sharing</p>
            <span className='text-7xl font-extrabold'>Notes</span>
            <h1 className='mt-6 text-xl font-bold leading-6'><p className='text-white inline-block'>ScholarGuide</p> helps you with clear handy <p className='text-white inline-block'>Notes</p> for <div className="highlight inline-block bg-[#ffb300] text-[#191919] px-2 py-0.5 rounded-sm">Highlight</div> your <p className='text-white inline-block'>Progress.</p></h1>
            <div className="headBtn mt-7">
              <button className='py-3 lg:py-2.5 px-6' varient={'filled'} onClick={() => { logOut() }} >Explore</button>
              <Button className={'py-3 lg:py-2.5 px-6'} varient={'outlined'}>Check Vlogs</Button>
            </div>
          </div>

        </div>

        <div className="aboutPage flex flex-col items-center text-center mx-4">

          <div className="textbox px-2 lg:mx-20">
            <h1 className='text-3xl lg:text-4xl font-bold'>What is <span className='text-[#ffb300]'>ScholarGuide</span> !!</h1>
            <p className="text-md font-normal leading-6 mt-4 px-1 md:px-44">Lets take an overview about what actualy <span className='text-white font-bold'>You Can Get</span> from here and how can it will make your <span className='text-white font-bold'>Academic Journy Easy</span>.</p>
          </div>

          <div className="definitionBox text-white py-4 px-4 lg:mx-20 mx-4 mt-12 h-[300px] lg:h-auto overflow-scroll">
            <div className="AboutTitle lg:inline-block text-2xl font-bold text-[#ffb300] bg-[#191919]  px-3 py-1.5 rounded-[8px]">About It</div>
            <div className='Abouttext text-white mt-6'>
              <ul className='flex gap-3 md:gap-4 flex-col md:flex-row md:items-start'>
                <li className='flex-1 text-justify'>Welcome to <span className='font-bold text-[#191919]'>ScholarGuide</span>🎓✨ This is your go-to platform for sharing and discovering valuable student notes. On ScholarGuide, you can easily upload your own notes and access a diverse collection of notes shared by others. 📚🔍</li>
                <li className='flex-1 text-justify'>Stay updated with the latest in tech by diving into our engaging tech blogs. 💻📰 Plus, enjoy a peer learning experience where you can rate the notes you use, helping others find the highest quality content based on your feedback. 🌟📈</li>
                <li className='flex-1 text-justify'>With ScholarGuide, you get a dynamic, interactive space to enhance your learning journey through collaboration and shared knowledge. Join us and become part of a community that values and elevates your educational experience! 🌐👩‍🎓👨‍🎓</li>
    
              </ul>
            </div>
          </div>

          <div className="aboutCard lg:mx-16 px-4 py-4 text-white flex justify-between items-center flex-col-reverse gap-6 lg:flex-row mt-6">

            {/* Left Section */}

            <div className="aboutLeft flex-1">
              {/* heading */}
              <div className="heading text-2xl font-bold text-[#ffcb00]">Benifits</div>


              <div className="subAbout flex flex-col justify-center items-start text-start mt-6">
                <div className="aboutSubheading flex justify-center items-center text-sm">
                  <img className='mr-2 w-5 h-5' src="https://img.icons8.com/color/38/omnichannel--v1.png" alt="" srcset="" />
                  Networking
                </div>
                <div className="aboutP lg:pr-20">Connect with fellow students to upload and access shared notes. Collaborate and learn from each other, enhancing your study resources and academic success.</div>
              </div>

              <div className="subAbout flex flex-col justify-center items-start text-start mt-6">
                <div className="aboutSubheading flex justify-center items-center text-sm">
                  <img className='mr-2 w-5 h-5' src="https://img.icons8.com/color/38/brain--v1.png" alt="" srcset="" />
                  Quick Access
                </div>
                <div className="aboutP lg:pr-20">Easily access and share peer notes, gaining quick, diverse study materials that are invaluable for efficient exam preparation and enhanced understanding.</div>
              </div>

              <div className="subAbout flex flex-col justify-center items-start text-start mt-6">
                <div className="aboutSubheading flex justify-center items-center text-sm">
                  <img className='mr-2 w-5 h-5' src="https://img.icons8.com/color/38/present.png" alt="" srcset="" />
                  24/7 Availablity
                </div>
                <div className="aboutP lg:pr-20">Our platform offers constant access to peer notes, day or night. Study whenever needed with unrestricted availability of essential resources for flexible exam preparation.</div>
              </div>

            </div>

            {/* Right section */}

            <div className="aboutRight flex-1 lg:ml-5 md:w-[400px] md:h-[400px]">
              <img className='w-full h-full overflow-hidden rounded-md' src={AboutImage} alt="" srcset="" />
            </div>

          </div>

        </div>

        <div className="blog text-center mt-20 grayBG py-6">
          <div className="textbox mx-4">
            <h1 className='font-bold text-4xl'>Latest <span className='text-[#ffcb00]'>Tech Blogs</span> for You</h1>
            <p className='text-md font-normal leading-6 mt-4 px-1 lg:px-14'>Stay ahead with the latest <span className='font-bold text-white'>Insights</span> and trends in <span className='font-bold text-white'>Tech</span>.</p>
          </div>
          <div className="slider-container mt-10 py-6">
            <Slider {...settings}>
              {
                typesOfNotes.map((type) => {
                  return (
                    <Card title={type.name} desc={" This is description "} />
                  )
                })
              }
            </Slider>

          </div>
        </div>

        <footer className='mx-4 mt-20'>
          <div className="contact  px-2 py-4 text-center">
            <div className="textbox mb-10">
              <h1 className='font-bold text-4xl'>Raise Your <span className='text-[#ffcb00]'>Query</span></h1>
              <p className='text-md font-normal leading-6 mt-2 px-1 lg:px-14'>Don't hasitate, your <span className='font-bold text-white'>Feedback</span>  makes us <span className='font-bold text-white'>Perfect</span></p>
            </div>
            <ContactForm className={'contactForm'} />
          </div>
        </footer>

      </div>
    </>
  )
}
