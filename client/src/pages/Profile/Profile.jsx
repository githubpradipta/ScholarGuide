import React from 'react'
import './Profile.css'
import LeftArrow from '../../assets/Logo/LeftArrow'
import EditIcon from '../../assets/Logo/EditIcon'
import RightArrow2 from '../../assets/Logo/RightArrow2'
import HelpandSupportIcon from '../../assets/Logo/HelpandSupportIcon'
import LogoutIcon from '../../assets/Logo/LogoutIcon'
import LockIcon from '../../assets/Logo/LockIcon'
import Unsave from '../../assets/Logo/Unsave'
import UploadIcon from '../../assets/Logo/UploadIcon'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


export default function Profile() {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
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
        <div className='profileDiv h-screen'>
            <div className="header flex justify-between items-center py-4 pt-8">
                <div className="backIcon ml-4"><LeftArrow /></div>
                <div className="profileHeading mr-8 flex-1 text-center text-2xl font-bold">My Profile</div>
            </div>

            {/* profiletop */}
            <div className="profileMainInfo mt-6 mx-4 py-4 rounded-xl flex gap-4 justify-center items-center">
                <div className="profilePic w-[90px] h-[90px] rounded-[50%]">
                    <img className='w-full h-full object-cover rounded-[50%]' src="https://imgs.search.brave.com/5cAi-jXDh0PdCGuh2vvsggwMUWvGlmTFmbCQ7jYJ9OI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc" alt="" srcset="" />
                </div>

                <div className="text mr-2">
                    <div className="name text-xl font-bold">{user.fullname}</div>
                    <div className="flex items-center">
                        <div className="username text-md font-semibold text-[#656565]">@{user.username}</div>
                        <p className='text-[#656565] text-light mx-2'>|</p>
                        <div className="username text-xs font-semibold text-[#656565]">21BCS2279</div>
                    </div>

                </div>

                <div className="editProfileIcon ml-2"><EditIcon className='' /></div>
            </div>

            <hr className='my-6 mx-4' />


            {/* Dashboard1 */}
            <div className="profileDashboard flex flex-col justify-start items-center px-6">
                <div className="title w-full"><span className='text-[#656565] font-semibold text-sm'>Dashboard</span></div>

                <ul className="dashboardList mt-4 w-full flex flex-col">
                    <li className="flex w-full py-4 justify-between items-center">
                        <div className="left flex justify-center items-center gap-2">
                            <div className="icon"><Unsave /></div>
                            <div className="text font-semibold text-[18px] text-[#191919]">My Saves</div>
                        </div>
                        <div className="right">
                            <div className="icon"><RightArrow2 /></div>
                        </div>
                    </li>
                    <li className="flex w-full py-4 justify-between items-center">
                        <div className="left flex justify-center items-center gap-2">
                            <div className="icon"><UploadIcon /></div>
                            <div className="text font-semibold text-[18px] text-[#191919]">My Uploads</div>
                        </div>
                        <div className="right">
                            <div className="icon"><RightArrow2 /></div>
                        </div>
                    </li>
                    <li className="flex w-full py-4 justify-between items-center">
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

            <hr className='my-4 mx-4' />

            {/* Dashboadr2 */}
            <div className="help_logout flex flex-col justify-start items-center px-6">

                <ul className="dashboardList w-full flex flex-col">
                    <li className="flex w-full py-3 justify-between items-center">
                        <div className="left flex justify-center items-center gap-2">
                            <div className="icon"><HelpandSupportIcon /></div>
                            <div className="text font-semibold text-[18px] text-[#191919]">Help & Support</div>
                        </div>
                        <div className="right">
                            <div className="icon"><RightArrow2 /></div>
                        </div>
                    </li>
                    <li className="logout flex w-full py-3 justify-between items-center" onClick={() => { logOut() }}>
                        <div className="left flex justify-center gap-2">
                            <div className="icon"><LogoutIcon className='text-red-500' /></div>
                            <div className="text font-bold text-[18px] text-red-500">Log Out</div>
                        </div>

                    </li>

                </ul>
            </div>





        </div>
    )
}
