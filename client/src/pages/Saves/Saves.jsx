import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Saves.css'
import X_logo from '../../assets/Logo/X_logo';
import saveImage from '../../assets/Images/SaveImage.svg'
import saveImage2 from '../../assets/Images/SaveImage2.svg'
import Save from '../../assets/Logo/Save';
import Navbar from '../../components/my_ui/Navbar/Navbar';

export default function Saves() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const deleteOneSave = (noteID) => {
        axios.post(`http://localhost:8000/user/saves/delete/${user._id}`, { noteid: noteID }
        )
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data))
            })
            .catch((err) => {
                // have to do something

            })


    }
    const deleteAllSaves = () => {
        axios.post(`http://localhost:8000/user/saves/deleteall/${user._id}`)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch((err) => {
                //have to do something
            })
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('auth'))
        axios.get(`http://localhost:8000/notes/saves/${user._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                navigate('/signin')
            })
    }, [deleteOneSave, deleteAllSaves])


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
                        <div className="textArea w-full bg-white min-h-[60%] absolute lg:static top-[330px] lg:top-[450px] rounded-[28px] lg:mt-8 pt-16 pb-8 px-8 z-0">
                            <div className="text flex flex-col justfy-start">
                                <p className='text-3xl lg:text-4xl font-bold mb-2'>Thank God! you saved these before</p>
                                <p className='text-md pr-4 font-bold mb-6 text-[#6e6e6e]'>now everything you need is right at your fingertips!</p>
                            </div>

                            <div className="cardList mt-6">
                                <div className="cardheader flex items-center justify-between lg:mb-10 lg:px-6">
                                    <p className="text-2xl lg:text-3xl font-bold flex items-center">Saves <Save saveClass='inline w-6 h-6 ml-2' /> </p>
                                    <div className="deleteAll text-md font-bold px-2 py-1 text-blue-500 hover:bg-blue-100 rounded-2xl cursor-pointer" onClick={() => { deleteAllSaves() }}>Remove All</div>
                                </div>
                                {

                                    data.map((item) => {
                                        return (
                                            <div className="card flex justify-between items-center my-6 px-4 py-4 rounded-xl">
                                                <div className="saveCardText">
                                                    <div className="category px-2 py-1 rounded-xl text-xs md:text-sm">{item.category}</div>
                                                    <div className="title font-semibold text-sm md:text-md lg:text-xl mt-1 pr-2">{item.title}</div>
                                                    <div className="author mt-4 text-xs flex items-center">
                                                        <span className='mr-2'>{item.author}</span>
                                                        <span className='mr-2 font-extralight'>|</span>
                                                        <span>@{user.username}</span>
                                                    </div>
                                                </div>
                                                <div className="saveCardImage w-24 h-24 lg:w-28 lg:h-28 rounded-md relative">
                                                    <div className="x-logo absolute top-3 right-3 bg-white rounded-full p-[2px] cursor-pointer" onClick={() => { deleteOneSave(item._id) }}><X_logo className={`w-4 h-4`} /></div>
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
