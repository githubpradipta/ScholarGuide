import React, { useEffect, useState } from 'react'
import LeftArrow from '../../assets/Logo/LeftArrow'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MutatingDots } from 'react-loader-spinner'
import DefaultImg from "../../assets/Images/DefaultProfileImage.png"
import './EditProfile.css'
import ImageUploadWithoutForm from '../ImageUpload/ImageUpload'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // If not open, don't render anything

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-96 max-w-full">
                <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-gray-800">
                    x
                </button>
                <ImageUploadWithoutForm onClose={onClose}/>
            </div>
        </div>
    );
};

export default function EditProfile() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [fadeClass, setFadeClass] = useState('fade-in');

    const [editData, setEditData] = useState({
        fullname: "",
        gender: "",
        email: "",
        username: "",
        contact: "",
        year: "",
        department: "",
        university: "",
        address: "",
        state: "",
        city: "",
      });
    
      useEffect(() => {
        const token = localStorage.getItem('auth');
        if (!token) {
          navigate('/signin');
          return;
        }
    
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setUser(user);
        }
      }, [navigate,isModalOpen]);
    
      useEffect(() => {
        if (user) {
          setEditData({
            fullname: user.fullname || "",
            gender: user.gender || "",
            email: user.email || "",
            username: user.username || "",
            contact: user.contact || "",
            year: user.year || "",
            department: user.department || "",
            university: user.university || "",
            address: user.address || "",
            state: user.state || "",
            city: user.city || "",
          });
        }
      }, [user]);
    
    

    

    const getData = (e) => {
        const { name, value } = e.target;

        setEditData({
            ...editData,
            [name]: value,
        })
    }

    const submitData = () => {
        const filteredData = Object.fromEntries(
            Object.entries(editData).filter(([key, value]) => value !== '' && value !== null && value !== undefined)
        );
        const user_id = user._id;
        setFadeClass('fade-in');
        setLoading(true);


        const delay = new Promise((resolve) => setTimeout(resolve, 1500));

        Promise.all([
            axios.post(`http://localhost:8000/user/editProfile/${user_id}`, filteredData),
            delay
        ])
            .then(([res]) => {
                const { message, user } = res.data;
                localStorage.setItem('user', JSON.stringify(user))
            })
            .catch((err) => {
                console.log(err);

            })
            .finally(() => {
                setFadeClass('fade-out');
                setLoading(false);
            })
    }
    //     setEditData({
    //         fullname: user.fullname ? user.fullname : "",
    //         gender: "",
    //         email: user.email ? user.email : "",
    //         username: user.username ? user.username : "",
    //         contact: user.contact ? user.contact : "",
    //         year: user.year ? user.year : "",
    //         department: user.department ? user.department : "",
    //         university: user.university ? user.university : "",
    //         address: user.address ? user.address : "",
    //         state: user.state ? user.state : "",
    //         city: user.city ? user.city : "",
    //     })
    // }, [submitData]);



    return (
        <div className={`editprofilePage bg-[#292929] min-h-screen flex flex-col justify-center items-center px-4 py-4`}>

            {
                loading ?
                    <div className={fadeClass}>
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
                        <div className="text-[#ffb300] text-xl font-semibold">Just a second</div>
                    </div>
                    :
                    <>
                        {/* header */}
                        <div className="header text-white px-2 my-4 mt-4 flex justify-between items-center w-full">
                            <div className="backbtn flex items-center cursor-pointer lg:hidden" onClick={() => { navigate(-1) }}>
                                <div className="backIcon" ><LeftArrow /></div>
                                <div className="text-xl font-medium">Back</div>
                            </div>

                            <div className="profileHeading flex-1 text-center text-2xl lg:text-3xl font-bold" onClick={()=>{setIsModalOpen(true)}}>Profile</div>
                            <div className="submitbtn text-xl font-semibold text-orange-400 cursor-pointer lg:hidden" onClick={submitData}>Confirm</div>
                        </div>

                        {/* ProfileTop */}
                        <div className="profileTop text-white flex flex-col items-center my-10">
                            <div className="profilePic my-4 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-[50%]">
                                <img className='w-full h-full object-cover rounded-[50%]' src={user.profile_url} alt="image" srcset="" />
                            </div>
                            <div className="name text-2xl font-bold ">{user.fullname}</div>
                            <div className="username text-xl font-medium text-[#a4a4a4] mt-1">@{user.username}</div>
                        </div>

                        <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
                            <h2>This is a popup!</h2>
                            <p>You can render any component here.</p>
                            <button onClick={() => { setIsModalOpen(false) }}>Close Modal</button>
                        </Modal>


                        <div className="InputDetails w-full">
                            {/* Basic Details */}
                            <div className="header text-xl font-semibold text-white my-4">Basic Details</div>
                            <div className="form flex flex-col items-center w-full">
                                <div className="sec1 flex w-full gap-2">

                                    <input type="text" onChange={getData} className="name w-full" name='fullname' placeholder='Fullname' value={editData.fullname} />
                                    <select className="custom-select w-full" onChange={getData} name='gender'>
                                        <option value="" disabled selected>{editData.gender ? editData.gender : "Gender"}</option>
                                        <option value="male">Male</option>
                                        <option value="female" name>Female</option>
                                        <option value="other" name>Other</option>
                                    </select>

                                </div>

                                <div className="sec2 w-full">
                                    <input type="email" onChange={getData} name="email" className="email w-full" placeholder='Email' value={editData.email} />
                                </div>

                                <div className="sec3 flex gap-2 w-full">
                                    <input type="text" onChange={getData} className='username w-full' name='username' placeholder='Username' value={editData.username} />
                                    <input type="number" onChange={getData} className='contact w-full' name='contact' placeholder='Contact Number' value={editData.contact} />

                                </div>

                            </div>

                            <hr className='w-full my-8  border-[#424242]' />

                            {/* Additional Details */}
                            <div className="header text-xl font-semibold text-white my-4">Additional Details</div>
                            <div className="form flex flex-col items-center w-full">
                                <div className="sec1 flex w-full gap-2">

                                    <select className="custom-select w-full" onClick={getData} name='year'>
                                        <option value="" disabled selected>{editData.year}</option>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </select>

                                    <input type="text" onChange={getData} className="department w-full" name='department' placeholder='Department' value={editData.department} />
                                </div>
                                <div className="sec2 w-full gap-2">
                                    <input type="text" onChange={getData} className="university w-full" name='university' placeholder='University' value={editData.university} />
                                    <textarea type="text" onChange={getData} className="address w-full min-h-[100px] max-h-[40px]" name='address' placeholder='Address' value={editData.address} />
                                </div>
                                <div className="sec1 flex w-full gap-2">
                                    <input type="text" onChange={getData} className="state w-full" name='state' placeholder='State' value={editData.state} />
                                    <input type="text" onChange={getData} className="city w-full" name='city' placeholder='City' value={editData.city} />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button className='confirmBtn w-full bg-[#ffb300] py-4 mt-6 mb-4 rounded-md text-[#191919] font-semibold' onClick={submitData}>Confirm</button>
                        </div>
                    </>
            }

        </div>
    )
}
