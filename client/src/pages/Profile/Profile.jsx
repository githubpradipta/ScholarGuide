import React, { useEffect, useState } from 'react'
import './Profile.css'
import '../../AnimationBtnsCss.css'
import LeftArrow from '../../assets/Logo/LeftArrow'
import EditIcon from '../../assets/Logo/EditIcon'
import RightArrow2 from '../../assets/Logo/RightArrow2'
import HelpandSupportIcon from '../../assets/Logo/HelpandSupportIcon'
import LogoutIcon from '../../assets/Logo/LogoutIcon'
import LockIcon from '../../assets/Logo/LockIcon'
import Unsave from '../../assets/Logo/Unsave'
import UploadIcon from '../../assets/Logo/UploadIcon'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import LinkedinIcon from '../../assets/Logo/LinkedinIcon'
import GithubIcon from '../../assets/Logo/GithubIcon'
import FacebookIcon from '../../assets/Logo/FacebookIcon'
import GmailIcon from '../../assets/Logo/GmailIcon'
import LocationIcon from '../../assets/Logo/LocationIcon'
import CollegeIcon from '../../assets/Logo/CollegeIcon'
import StarIcon from '../../assets/Logo/StarIcon'
import img from "C:/Users/pradi/Desktop/Own/Profile Pics/Pradipta_Banerjee_Profile.png"

export default function Profile() {
    const [user,setUser] = useState({});
    const navigate = useNavigate()

    useEffect(()=>{
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
      },[])    
    

    const logOut = () => {
        Swal.fire({
            title: 'Want to logout',
            icon: 'warning',
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            cancelButtonText: 'cancel',
            denyButtonText: 'Logout'
        })
            .then((result) => {
                if (result.isDenied) {
                    localStorage.removeItem('auth');
                    localStorage.removeItem('user');
                    navigate('/');
                }

            })
    }


    return (
        <div className='profileDiv h-screen '>
            <div className="header flex justify-between items-center py-4 pt-8 lg:hidden">
                <div className="backIcon ml-4" onClick={()=>{navigate(-1)}}><LeftArrow /></div>
                <div className="profileHeading mr-8 lg:mr-0 flex-1 text-center text-2xl lg:text-3xl font-bold">My Profile</div>
            </div>
            <div className="profilebody flex flex-col lg:flex-row lg:py-8 lg:h-full">
                {/* profiletop */}

                <div className="profileleft lg:w-1/3 mt-6 lg:mt-0 mx-4 lg:border-2 border-0 lg:border-[#ffb300] bg-[#191919] h-full rounded-xl">

                    <div className="profileMainInfo  py-4 px-4 rounded-xl flex lg:flex-col gap-2 justify-center items-center">

                        <div className="profilePic w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-[50%] mr-4 md:mr-0">
                            <img className='w-full h-full object-cover rounded-[50%]' src={user.profile_url} alt="" srcset="" />
                        </div>

                        <div className="text text-center mr-2 lg:mr-0">
                            <div className="name text-xl lg:text- font-bold">{user.fullname}</div>
                            <div className="flex items-center w-full lg:justify-center">
                                <div className="username text-sm font-semibold text-[#656565]">@{user.username}</div>
                                <p className='text-[#656565] text-light mx-2'>|</p>
                                <div className="username text-xs font-semibold text-[#656565]">21BCS2279</div>
                            </div>

                        </div>

                        <div className="editProfileIcon ml-2 lg:hidden" onClick={()=>{navigate('/profile/edit')}}><EditIcon className='' /></div>

                        <div className="container-eg-btn-2" onClick={()=>{navigate('/profile/edit')}}>
                            <Link className="editProfileBtn button button-5 rounded-md text-xs font-light" >Edit Profile</Link>
                        </div>

                        <div className="socialLinks hidden lg:flex justify-center item-center gap-8 my-3">
                            <div className='social-icons w-5 h-5 cursor-pointer hover:scale-125 transition-all ease'><LinkedinIcon color={`#a4a4a4`} /></div>
                            <div className='social-icons w-5 h-5 cursor-pointer hover:scale-125 transition-all ease'><GithubIcon color={`#a4a4a4`} /></div>
                            <div className='social-icons w-5 h-5 cursor-pointer hover:scale-125 transition-all ease'><FacebookIcon color={`#a4a4a4`} /></div>
                        </div>
                    </div> 

                    <hr className=' mx-4 hidden lg:block' />

                    <div className="otherInfo px-6 my-8 hidden lg:block ">
                        <div className="mainInfo flex flex-col gap-4 text-[#a4a4a4]">
                            <div className="email flex justify-start items-center">
                                <div className="icon text-md font-bold w-6 h-6"><GmailIcon color='#a4a4a4'/></div>
                                <div className="value text-sm ml-3 flex-1">{user.email}</div>
                            </div>

                            <div className="address flex justify-start items-center">
                                <div className="icon text-md font-bold w-6 h-6"><LocationIcon color='#a4a4a4'/></div>
                                <div className="value text-sm ml-3 flex-1">302 Ramkrishna Road, New Barrackpur, Kolkata-700131</div>
                            </div>

                            <div className="college flex justify-start items-start  items-center">
                                <div className="name text-md font-bold w-6 h-6"><CollegeIcon color='#a4a4a4'/></div>
                                <div className="value text-sm ml-3 flex-1">4th</div>
                            </div>

                            <div className="dept flex justify-start items-center">
                                <div className="icon text-md font-bold w-6 h-6"><StarIcon color='#a4a4a4'/></div>
                                <div className="value text-sm ml-3 flex-1">{user.branch}</div>
                            </div>

                        </div>
                    </div>

                </div>


                <hr className='my-6 mx-4 lg:hidden' />


                {/* Dashboard1 */}
                <div className="profileright w-full lg:border-2 lg:border-[#ffb300] rounded-xl lg:mr-4 lg:py-6">

                    <div className="hidden lg:block text-3xl font-bold text-center mb-10">My Profile</div>

                    <div className="profileDashboard flex flex-col justify-start lg:justify-center items-center px-6">
                        <div className="title w-full"><span className='text-[#656565] font-semibold lg:text-xl text-sm '>Dashboard</span></div>

                        <ul className="dashboardList mt-4 w-full flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center">
                            <li className="dashboardItem lg:transition-all lg:ease-in flex w-full py-4 justify-between items-center lg:px-4 lg:py-8 lg:rounded-2xl cursor-pointer" onClick={() => { navigate('/saves') }}>
                                <div className="left flex justify-center items-center gap-2">
                                    <div className="icon"><Unsave /></div>
                                    <div className="text font-semibold text-[18px] text-[#191919]">My Saves</div>
                                </div>
                                <div className="right">
                                    <div className="icon"><RightArrow2 /></div>
                                </div>
                            </li>
                            <li className="dashboardItem lg:transition-all lg:ease-in flex w-full py-4 justify-between items-center lg:px-4 lg:py-8 lg:rounded-2xl cursor-pointer">
                                <div className="left flex justify-center items-center gap-2">
                                    <div className="icon"><UploadIcon /></div>
                                    <div className="text font-semibold text-[18px] text-[#191919]">My Uploads</div>
                                </div>
                                <div className="right">
                                    <div className="icon"><RightArrow2 /></div>
                                </div>
                            </li>
                            <li className="dashboardItem lg:transition-all lg:ease-in flex w-full py-4 justify-between items-center lg:px-4 lg:py-8 lg:rounded-2xl cursor-pointer">
                                <div className="left flex justify-center items-center gap-2">
                                    <div className="icon"><LockIcon /></div>
                                    <div className="text font-semibold text-[18px] text-[#191919]">Change Password</div>
                                </div>
                                <div className="right">
                                    <div className="icon"><RightArrow2 /></div>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <hr className='my-8 mx-4' />

                    {/* Dashboadr2 */}
                    <div className="help_logout flex flex-col justify-start items-center px-6">

                        <ul className="dashboardList w-full flex flex-col lg:items-start">
                            <li className="dashboardItem lg:transition-all lg:ease-in flex w-full px-2 lg:rounded-md py-3 lg:w-1/2 justify-between items-center cursor-pointer">
                                <div className="left flex justify-center items-center gap-2">
                                    <div className="icon"><HelpandSupportIcon /></div>
                                    <div className="text font-semibold text-[18px] text-[#191919]">Help & Support</div>
                                </div>
                                <div className="right">
                                    <div className="icon"><RightArrow2 /></div>
                                </div>
                            </li>
                            <li className="logout dashboardItem lg:transition-all lg:ease-in flex w-full lg:w-1/2 px-2 lg:rounded-md py-3 justify-between items-center cursor-pointer" onClick={() => { logOut() }}>
                                <div className="left flex justify-center gap-2">
                                    <div className="icon"><LogoutIcon className='text-red-500' /></div>
                                    <div className="text font-bold text-[18px] text-red-500">Log Out</div>
                                </div>

                            </li>

                        </ul>
                    </div>
                </div>

            </div>






        </div>
    )
}
