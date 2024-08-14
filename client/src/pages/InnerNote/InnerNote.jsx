import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './InnerNote.css'
import LoveSolid from '../../assets/Logo/LoveSolid';
import LoveOutlined from '../../assets/Logo/LoveOutlined';
import Unsave from '../../assets/Logo/Unsave';
import Save from '../../assets/Logo/Save';
import Navbar from '../../components/my_ui/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';

export default function InnerNote() {
    const { category } = useParams();
    const navigate = useNavigate();
    const [like, setLike] = useState({id:"",status:false});
    const [save, setSave] = useState(false);
    const [data,setData] = useState([]);
    // const [data,setData] = useState([

    //     {
    //         id:0,
    //         name: "Computer Fundamentals",
    //         desc: "db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //         author: "Pradipta Banerjee",
    //         like: false,
    //         likesNo: 10,
    //         save: true,
    //         img_url: "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?t=st=1723036051~exp=1723039651~hmac=c8938bbfe58f47f2eeb2ed1eec929ab9abf565bbb9c8d5f24375e896d8eca2e9&w=740"
    //     },
    //     {
    //         id:1,
    //         name: "Data Structure",
    //         desc: "db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //         author: "Pradipta Banerjee",
    //         like: false,
    //         likesNo: 50,
    //         save: false,
    //         img_url: "https://img.freepik.com/premium-vector/man-working-laptop-with-word-code-it_1013341-201322.jpg?w=740"
    //     },
    //     {
    //         id:2,
    //         name: "Programing Languages",
    //         desc: "db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //         author: "Pradipta Banerjee",
    //         like: false,
    //         likesNo: 5,
    //         save: true,
    //         img_url: "https://img.freepik.com/free-vector/binary-code-concept-illustration_114360-6578.jpg?t=st=1723036174~exp=1723039774~hmac=4a8e20c89587c8ae625b16fc5c60788d02526c2d34895d1d01c44b3e1b2ec83d&w=740"
    //     },
    //     {
    //         id:3,
    //         name: "Aptitude",
    //         desc: "db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
    //         author: "Pradipta Banerjee",
    //         like: true,
    //         likesNo: 1,
    //         save: false,
    //         img_url: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?t=st=1723036203~exp=1723039803~hmac=97cab3f93fbe3524c34c0e34fcadf6f5fa0ae23d0a1369fdf5352667f904bfb5&w=996"
    //     }
    // ]);
    
    const toggleLike = (item)=>{
        const newLikes = item.likesCount+1;
        axios.post(`http://localhost:8000/notes/like/${item._id}`,{newLikes})
        .then((res)=>{
            // console.log(res.data);
        })
        .catch((err)=>{
            // navigate('/signin')
            // console.log(err.message);
            
        })
    }
    const toggleSave = ()=>{
        // setSave(save?false:true)
    }
    console.log(category);
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('auth'));
        
        axios.get(`http://localhost:8000/notes/${category}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            navigate('/signin')
            
        })
        
    },[])
    
    console.log(data);
    
    return (
        <>
        <Navbar mode={'light'}/>
        <div className='InnerNoteBody flex flex-col justify-center items-center w-screen py-10 lg:pt-16'>
            <div className="textBox text-center my-4">
                <h1 className='text-3xl flex flex-col'>
                    Best
                    <span className='font-extrabold'>Computer Science Notes</span>
                    for you
                </h1>
                <p className='mt-4 text-md px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, corporis assumenda? Iure, sunt.</p>
            </div>
            <div className="innerCardBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((item) => {
                        return (
                            <div key={item._id} className="Notecard w-[350px] px-4 py-2 rounded-md my-2 mx-2">
                                <img className='w-full mt-2 rounded-md h-[200px] object-cover' src={item.img_url} alt="" />
                                <div className="info mt-4 text-white">
                                    <div className="NoteTitle font-bold text-xl">{item.title}</div>
                                    <div className="NoteDesc text-sm mt-2">{item.description.substring(1,200)}...</div>
                                    <div className="NoteAuther font-light mt-4">- {item.author}</div>
                                    <div className="NoteFooter mt-4 mb-3 w-full flex justify-between items-start">
                                        <div className="NotefooterLeft flex justify-center items-center">
                                            <div className="like cursor-pointer" onClick={()=>{toggleLike(item)}} >{like ? <LoveSolid /> : <LoveOutlined />}</div>
                                            <div className="likecount font-light text-md ml-1">{item.likesCount}</div>
                                        </div>
                                        <div className="NotefooterRight">
                                            <div className="save cursor-pointer" onClick={toggleSave()}>{save ? <Save /> : <Unsave />}</div>
                                        </div>
                                    </div>
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
