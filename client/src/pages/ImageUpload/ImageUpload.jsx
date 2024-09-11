import React, { useState } from 'react';
import axios from 'axios';
import { CustomProvider, Loader } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css'


const ImageUploadWithoutForm = ({ onClose }) => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));

    // Handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);

            // Generate a preview of the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle the upload process without using a form
    const handleUpload = async () => {
        if (!image) {
            setMessage('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', image);
        setLoading(true);


        try {
            const response = await axios.post(`http://localhost:8000/user/editprofileimage/${user._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            localStorage.setItem('user', JSON.stringify(response.data.user))
            setLoading(false);
            onClose();


        } catch (error) {
            setMessage('Failed to upload image.');
            console.error('Error uploading image:', error);
        }


    };

    return (
        <div className='flex flex-col justify-center items-center'>

            <h2 className='text-xl font-bold my-6 text-black'>Upload Image</h2>

            <div className="flex flex-col items-center">
                <label className="relative cursor-pointer bg-orange-500 text-white rounded-md font-medium px-4 py-2 hover:bg-blue-600 transition duration-300">
                    <span>Select Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only"
                    />
                </label>
                {image && (
                    <p className="mt-2 text-gray-600">Selected file: {image.name}</p>
                )}
            </div>

            {preview && <img src={preview} alt="Image Preview" className='mt-6 w-[300px] h-[300px] object-cover rounded-[50%]' />}
           
            <button onClick={handleUpload} className='bg-gray-500 mt-6 px-4 py-2 rounded-md text-white flex justify-center items-center'>{loading?'Uploading...':'Upload'}</button>
            
            {message && <p className='text-red-400 font-medium'>{message}</p>}
        </div>
    );
};

export default ImageUploadWithoutForm;
