import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/my_ui/Navbar/Navbar'
import axios from 'axios'
import'./Notes.css';

export default function Notes() {
    // let data = [
    //     {
    //       name: "Computer Fundamentals",
    //       desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //       img_url:"https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?t=st=1723036051~exp=1723039651~hmac=c8938bbfe58f47f2eeb2ed1eec929ab9abf565bbb9c8d5f24375e896d8eca2e9&w=740"
    //     },
    //     {
    //       name: "Data Structure",
    //       desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //       img_url:"https://img.freepik.com/premium-vector/man-working-laptop-with-word-code-it_1013341-201322.jpg?w=740"
    //     },
    //     {
    //       name: "Programing Languages",
    //       desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //       img_url:"https://img.freepik.com/free-vector/binary-code-concept-illustration_114360-6578.jpg?t=st=1723036174~exp=1723039774~hmac=4a8e20c89587c8ae625b16fc5c60788d02526c2d34895d1d01c44b3e1b2ec83d&w=740"
    //     },
    //     {
    //       name: "Aptitude",
    //       desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //       img_url:"https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?t=st=1723036203~exp=1723039803~hmac=97cab3f93fbe3524c34c0e34fcadf6f5fa0ae23d0a1369fdf5352667f904bfb5&w=996"
    //     }
    //   ]
    const [data,setData] = useState([]);
    const navigate = useNavigate()
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('auth'));
        
        axios.get('http://localhost:8000/notes',{
          headers: {
            Authorization: `Bearer ${token}`
        }
        })
        .then((res)=>{
          setData(res.data);
        })
        .catch((err)=>{
          navigate('/signin')
        })
    })
    
  return (
    <>
    <Navbar mode={'light'}/>
    <div className='flex flex-col justify-center items-center min-h-screen user-select-none'>
      <div className="textBox text-center px-14 my-4">
        <div className="heading text-3xl lg:text-4xl font-bold lg:font-extrabold mb-4">TOPICS</div>
        <p classsName="mt-2 font-light text-2xl">Topics that turn <span className='font-bold'>"What’s that !??"</span>  into <span className='font-bold'>"I got this!"</span> , because pretending to know is half the battle!</p>
      </div>
      <div className="cardBox w-full flex flex-col my-2 px-4 my-3 md:px-16 md:my-6 lg:mx-20 grid lg:grid-cols-2 grid-cols-1 gap-3 ">
        
        {
            data.map((item)=>{
                return(
                    <div className="notecard flex justify-start items-center py-3 px-3 rounded-xl cousor-default overflow-hidden">
                    <img className=' w-14 h-14 rounded-sm' src={item.img_url} alt="img" />
                    <div className="overlay ml-4 flex-1 flex justify-between items-center">
                      <div className="text flex flex-col mr-3">
                        <div className="title text-md font-medium">{item.name}</div>
                        <div className="desc text-xs mt-1">{item.description}</div>
                      </div>
                        <button className='overlaybtn py-[7px] px-5 rounded-[2px] font-bold'
                        onClick={()=>{navigate(`/notes/${item._id}`)}}
                        >Access</button>
                    </div>
                    </div>
                )
            })
        }
        
   
     
            
        
      </div>
    </div>
    </>
  )
}
