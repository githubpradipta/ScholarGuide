import React, { useEffect, useState } from 'react'
import LeftArrow from '../../assets/Logo/LeftArrow'
import callImg from '../../assets/Images/call.png'
import mailImg from '../../assets/Images/email.png'
import communityImg from '../../assets/Images/population.png'
import FAQImg from '../../assets/Images/question-mark.png'
import manualImg from '../../assets/Images/user-guide.png'
import supportImg from '../../assets/Images/support.svg'
import { useNavigate } from 'react-router-dom'
import { MutatingDots } from 'react-loader-spinner'

export default function Help_Support() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setInterval(() => {
      setLoading(!loading);
    }, 1000);
  },[])

  return (
    <>
      {
        loading ?
          <div className="loader h-screen bg-gray-900 flex flex-col justify-center items-center">
            <MutatingDots
              visible={loading}
              height="100"
              width="100"
              color="#ffb300"
              secondaryColor="#ffb300"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <div className="text-slate-400 text-xl font-semibold">Just a second</div>
          </div>
          :
          <>
            <div className='help-support min-h-screen mx-4 pb-6 flex flex-col items-center'>
              <header className="header my-4 mt-8 w-full text-center flex items-center">
                <div className="cursor-pointer" onClick={()=>{navigate(-1)}}><LeftArrow/></div>
                <h1 className="text-2xl font-medium flex-1 mr-4">Help & Support</h1>
              </header>

              <div className="container flex flex-col lg:flex-row justify-center items-center flex-1">
                <div className="top mb-10 lg:mb-0 w-full lg:w-[40%] flex flex-col items-center justify-center">
                  <img src={supportImg} alt="" srcset="" className='w-[80%] md:w-[50%] lg:w-[80%]' />
                  <div className="text text-center lg:hidden">
                    <h1 className='text-2xl font-bold text-orange-400'>How can we help you?</h1>
                    <p className='mt-4 text-sm text-slate-400 md:px-20'>Welcome to ScholarGuide help and support section. Here you get a absolute guide for getting a smooth experience of using our application.</p>
                  </div>
                </div>




                <div className="content lg:w-[60%]">

                  <div className="subsec my-2 flex items-center justify-center gap-2 mb-4">
                    <div className="box w-full bg-white shadow-2xl px-4 py-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all ease cursor-pointer" onClick={() => { window.location.href = "tel:+919038588162"; }}>
                      <div className="image">
                        <img src={callImg} alt="" className='w-[30px] my-6' />
                      </div>

                      <div className="text font-bold text-xl">Call Us</div>
                      <div className="text-slate-600 text-sm">Talk with our admins</div>
                    </div>

                    <div className="box w-full bg-white shadow-2xl px-4 py-4 flex flex-col items-center justify-center rounded-xl hover:scale-105 transition-all ease cursor-pointer" onClick={() => { window.location.href = "mailto:banerjeepradipta08@gmail.com?subject=Query's%20Subject&body=Message%20body%20here"; }}>
                      <div className="image">
                        <img src={mailImg} alt="" className='w-[30px] my-6' />
                      </div>

                      <div className="text font-bold text-xl">Mail Us</div>
                      <div className="text-slate-600 text-sm">Mail to our admins</div>
                    </div>
                  </div>

                  <div className="subsec flex flex-col gap-2">
                    <div className="box px-4 py-4 text-center rounded-xl flex justify-between items-center hover:shadow-xl transition-all ease cursor-pointer" onClick={() => { navigate('/support/faqs') }}>
                      <img src={FAQImg} alt="" className='w-[40px]' />
                      <div className="flex flex-col flex-1">
                        <div className="text font-semibold text-xl">FAQs</div>
                        <div className="text-slate-600 text-sm">Most issues can be solved by FAQs</div>

                      </div>
                    </div>
                    <hr className='border-1 border-slate-300' />
                    <div className="box px-4 py-4 text-center rounded-xl flex justify-between items-center hover:shadow-xl transition-all ease cursor-pointer" onClick={() => { navigate('/support/guidelines') }}>
                      <img src={communityImg} alt="" className='w-[40px]' />
                      <div className="flex flex-col flex-1">
                        <div className="text font-semibold text-xl">Community Guidelines</div>
                        <div className="text-slate-600 text-sm">Check basic guidelines for using and uploading notes</div>

                      </div>
                    </div>
                    <hr className='border-1 border-slate-300' />
                    <div className="box px-4 py-4 text-center rounded-xl flex justify-between items-center hover:shadow-xl transition-all ease cursor-pointer" onClick={() => { navigate('/support/manual') }}>
                      <img src={manualImg} alt="" className='w-[40px]' />
                      <div className="flex flex-col flex-1">
                        <div className="text font-semibold text-xl">Manual</div>
                        <div className="text-slate-600 text-sm">Detail Manual of uses of ScholarGuide</div>

                      </div>
                    </div>
                    <hr className='border-1 border-slate-300' />
                  </div>

                </div>
              </div>
            </div>
          </>

      }
    </>

  )
}
