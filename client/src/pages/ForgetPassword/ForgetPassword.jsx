import React, { useEffect, useState } from 'react'
import LeftArrow from '../../assets/Logo/LeftArrow'
import Forget_Password_Img from '../../assets/Images/Forgot_Password.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import OTPInput from '../../components/my_ui/OTPInput/OTPInput';
import Swal from 'sweetalert2';

export default function ForgetPassword() {
  const [email, setEmail] = useState({});
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [getOTP, setGetOTP] = useState({});
  const navigate = useNavigate();

  const getData = (e) => {
    const { name, value } = e.target;
    setEmail((prevEmail) => ({
      ...prevEmail,
      [name]: value,
    }));
  };

  const submit = () => {
    setLoadingOTP(true);
    axios.post('http://localhost:8000/user/forget-password', email)
      .then((res) => {
        const data = res.data;
        setGetOTP(data);
        console.log(getOTP);
        setLoadingOTP(false);
      })
      .catch(err => {
        setLoadingOTP(false);
        const errMessage = err.response.data.message;
        Swal.fire({
          text:errMessage,
          icon:'error',
          confirmButtonText:"Try Again"
        })
      });
  };

  return (
    <div className='forgetPassword py-4 px-2 bg-slate-50 min-h-screen flex flex-col items-center'>
      <div className="nav bg-transparent w-full flex justify-start mt-4 ml-4"><div className="" onClick={()=>{navigate(-1)}}><LeftArrow /></div></div>
      <div className="bgImage w-[80%] mt-6">
        <img src={Forget_Password_Img} alt="" srcset="" />
      </div>

      <div className="content flex flex-col items-center mt-24">
        <div className="heading text-center">
          <h1 className="text-2xl font-semibold text-yellow-500 mb-3">Forgot your password ?</h1>
          <p className="text-md font-normal text-slate-400 ">{Object.keys(getOTP).length != 0 ? getOTP.message : "Don't worry just enter your email for change pasword"}</p>
        </div>
        {
          Object.keys(getOTP).length == 0 ?
            <>
              <div className="form mt-8 w-full px-6">

                <input type="email" name="email" placeholder="abc@gmail.com" className="w-full border-b-2 border-yellow-600 outline-none pb-2 font-semibold text-gray-700 placeholder:font-semibold" onChange={(e) => { getData(e) }} />

              </div>
              <div className="submitBtn w-full px-6">
                <button className="w-full px-4 py-3 bg-[#ffb300] mt-6 rounded-md font-medium" onClick={() => { submit() }}>{loadingOTP ? 'Sending...' : 'Get OTP'}</button>
              </div>
            </>
            :
            <>
              <OTPInput otp = {getOTP.otp} />
            </>
        }

      </div>

    </div >
  )
}
