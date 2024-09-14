import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import X_logo from '../../assets/Logo/X_logo';
import saveImage from '../../assets/Images/SaveImage.svg'
import saveImage2 from '../../assets/Images/SaveImage2.svg'
import Save from '../../assets/Logo/Save';
import Navbar from '../../components/my_ui/Navbar/Navbar';


export default function MyUploads() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const deleteOneNote = (noteID) => {
    axios.post(`http://localhost:8000/notes/deletenote/${noteID}`, { userid: user._id })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.user))
      })
      .catch((err) => {
        // have to do something

      })


  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth'))
    if(!token) return navigate('/signin')

    axios.get(`http://localhost:8000/notes/getuploads/${user._id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setData(res.data.notes);

      })
      .catch((err) => {
        navigate('/signin')

      })
  }, [deleteOneNote])


  return (
    <>
      <Navbar />
      {
        data.length === 0 ?
          <div className=" flex flex-col justify-center items-center h-screen">
            <img className='w-3/4 lg:w-1/4 text-black' src={saveImage} alt="" srcset="" />
            <p className='text-md font-light mt-8'>You dont have any <span className='font-semibold'>saves</span> </p>
            <p className='text-md font-light '>Your <span className='font-semibold'>saved</span> notes are apper here</p>
          </div>
          :
          <div className="savesSection lg:px-8 lg:pt-[100px] py-8">
            <div className="saveBgImage lg:rounded-xl lg:h-[330px] lg:h-[340px] h-[324px] w-full lg:overflow-hidden">
              <img className='w-full h-full lg:h-auto object-cover translate-y-0 lg:-translate-y-[80px] md:translate-y-[20px]' src={saveImage2} alt="" srcset="" />
            </div>
            <div className="textArea w-full bg-white min-h-[60%] absolute lg:static top-[330px] lg:top-[450px] rounded-[28px] lg:mt-8 pt-16 pb-8 px-3 z-0">
              <div className="text flex flex-col justfy-start px-4">
                <p className='text-3xl lg:text-4xl font-bold mb-2'>Thank God! you saved these before</p>
                <p className='text-md pr-4 font-bold mb-6 text-[#6e6e6e]'>now everything you need is right at your fingertips!</p>
              </div>

              <div className="cardList mt-6">
                <div className="cardheader flex items-center justify-between lg:mb-10 px-4 lg:px-6">
                  <p className="text-2xl lg:text-3xl font-bold flex items-center">My Uploads <Save saveClass='inline w-6 h-6 ml-2' /> </p>
                </div>
                {

                  data.map((item) => {
                    return (
                      <div className="card flex flex-row-reverse justify-between items-center my-6 px-4 py-3 rounded-xl">
                        <div className="saveCardText flex items-center justify-between pl-4">
                          <div className="left">
                            <div className="lefttop flex flex-wrap items-center">
                              <div className="title font-semibold text-sm md:text-md lg:text-xl mt-1 pr-2">{item.notename}</div>
                              <div className="Note_category bg-gray-200 text-[8px] lg:text-[13px] mt-1 px-1 py-1 rounded-md">{item.category}</div>
                            </div>
                            <div className="note_desc font-normal text-xs lg:text-[15px] mt-1 md:mb-2">{item.description}</div>
                            <div className={`status px-2 py-1 rounded-md ${item.status ? 'bg-green-200 text-green-500' : 'bg-red-200 text-red-500'} inline-block text-[7px] md:text-sm`}>{item.status ? 'Approved' : 'Pending'}</div>
                          </div>
                          <div className="right ml-2">
                            <div className="dltBtn text-red-700 text-[13 lg:text-md font-medium bg-red-200 hover:bg-red-300 px-2 py-1 rounded-md transition-all ease cursor-pointer" onClick={() => { deleteOneNote(item._id) }}>{item.status?'Delete':'Unsend'}</div>
                          </div>


                        </div>
                        <div className="saveCardImage w-24 h-24 lg:w-28 lg:h-28 rounded-md relative">
                          <img className='w-full h-full overflow-hidden rounded-2xl' src="https://img.freepik.com/free-vector/gradient-japanese-temple-with-lake_52683-45004.jpg?t=st=1723918813~exp=1723922413~hmac=882a8e27862b6acc97ac67e573ebe9817f94d658658dde71e47d7958bef492e2&w=900" alt="" srcset="" />
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>

      }


    </>



  )
}

