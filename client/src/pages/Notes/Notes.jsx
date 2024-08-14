import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/my_ui/Navbar/Navbar'
import'./Notes.css';

export default function Notes() {
    let data = [
        {
          name: "Computer Fundamentals",
          desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
          img_url:"https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?t=st=1723036051~exp=1723039651~hmac=c8938bbfe58f47f2eeb2ed1eec929ab9abf565bbb9c8d5f24375e896d8eca2e9&w=740"
        },
        {
          name: "Data Structure",
          desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
          img_url:"https://img.freepik.com/premium-vector/man-working-laptop-with-word-code-it_1013341-201322.jpg?w=740"
        },
        {
          name: "Programing Languages",
          desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
          img_url:"https://img.freepik.com/free-vector/binary-code-concept-illustration_114360-6578.jpg?t=st=1723036174~exp=1723039774~hmac=4a8e20c89587c8ae625b16fc5c60788d02526c2d34895d1d01c44b3e1b2ec83d&w=740"
        },
        {
          name: "Aptitude",
          desc:"db idncidnci dc mdcid in ci iinc  jsncisncis is cisc ",
          img_url:"https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg?t=st=1723036203~exp=1723039803~hmac=97cab3f93fbe3524c34c0e34fcadf6f5fa0ae23d0a1369fdf5352667f904bfb5&w=996"
        }
      ]
    const navigate = useNavigate()
    console.log(navigate);
    
  return (
    <>
    <Navbar mode={'light'}/>
    <div className='pt-20 flex flex-col justify-center items-center'>
      <div className="textBox text-center px-14 my-4">
        <div className="heading text-3xl lg:text-4xl font-bold lg:font-extrabold">TOPICS</div>
        <p className="mt-2 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae at amet</p>
      </div>
      <div className="cardBox flex flex-col my-2 mx-6 lg:my-6 lg:mx-20 grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 ">
        
        {
            data.map((item)=>{
                return(
                    <div className="notecard relative my-4 mx-2 overflow-hidden lg:h-[400px] lg:w-[250px] h-[300px]">
                    <img className='overflow-hidden h-full w-full object-cover' src={item.img_url} alt="img" />
                    <div className="overlay absolute pb-5 px-5 left-0 top-0 w-full h-full flex flex-col items-center justify-end">
                        <div className="title text-white font-extrabold mb-2">{item.name}</div>
                        <button className='overlaybtn w-full py-2.5 font-bold text-xs rounded-sm'
                        onClick={()=>{navigate(`/${item.name}`)}}
                        >ACCESS</button>
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
