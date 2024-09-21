import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const OTPInput = ({otp}) => {
    const navigate = useNavigate();
    const [loadingOTP, setLoadingOTP] = useState(false);
    const [OTPdata, setOTPdata] = useState(['', '', '', '']);
    const submitOTP = () => {
        const OTP = OTPdata.join('');
        if(otp!=OTP){
            Swal.fire({
                text:"Invalid OTP",
                icon:"error",
                confirmButtonText:"Try again"
            })
        }
        else{
            navigate('/profile/reset-password',{ state: { OTP: otp } })
        }

    }
    const handleOTPChange = (event, index) => {
        const { name, value } = event.target;

        const newOtp = [...OTPdata]

        // Move to the next input if current one is filled
        if (/^[0-9]*$/.test(value)) { // Allow only numbers

            newOtp[index] = value;
            setOTPdata(newOtp);

            if (value && index < 3) {
                const nextInput = document.querySelectorAll('input[type="text"]')[index + 1];
                if (nextInput) nextInput.focus();
            }
        }

        // Move to the previous input if the current input is empty and the user deletes
        if (value === '' && index > 0) {
            const previousInput = document.querySelectorAll('input[type="text"]')[index - 1];
            if (previousInput) previousInput.focus();
        }
    };

    return (
        <>
            <div className="w-full flex flex-col">
                <div className="form mt-8 w-full px-6 flex justify-center space-x-2">
                    {/* Create four individual input fields for OTP */}
                    {Array.from({ length: 4 }).map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            name='otp'
                            className="w-12 h-12 border-b-2 focus:border-[#ffb300] outline-none text-center font-semibold text-gray-700 placeholder:font-semibold"
                            placeholder=""
                            style={{ borderColor: '#ffb300' }} // Custom border color
                            onChange={(e) => handleOTPChange(e, index)}
                        />
                    ))}

                </div>
                <div className="submitBtn w-full px-6">
                    <button className="w-full px-4 py-3 bg-[#ffb300] mt-6 rounded-md font-medium" onClick={() => { submitOTP() }}>{loadingOTP ? 'Sending...' : 'Submit'}</button>
                </div>

            </div>
        </>

    );
};

export default OTPInput;
