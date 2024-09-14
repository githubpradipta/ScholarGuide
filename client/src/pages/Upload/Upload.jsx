import React, { useEffect, useState } from 'react'
import Navbar from '../../components/my_ui/Navbar/Navbar'
import uploadImg from '../../assets/Images/UploadVector.svg'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Upload() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState({});
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(false);
    const [errors, setErrors] = useState('');
    const [formData, setFormData] = useState({
        notename: "",
        author: "",
        category: "",
        description: "",
    })

    useEffect(()=>{
        const auth = localStorage.getItem('auth');
        if(!auth) navigate('/signin')
            
        setUser(JSON.parse(localStorage.getItem('user')));
    },[])

    

    const handleFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            setErrors({ file: '' })
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        })
        setErrors({
            ...errors, [name]: ''
        })

        
    }
    const submitForm = (e) => {
        e.preventDefault();
        // if(!fileName) alert("Choose a file first")

        let hasError = false;
        let newError = {};

        if (!formData.notename) {
            hasError = true;
            newError.notename = "Please enter the notename"
        }
        if (!formData.author) {
            hasError = true;
            newError.author = "Please enter the author name"
        }
        if (!formData.category) {
            hasError = true;
            newError.category = "Please choose the category"
        }
        if (!formData.description) {
            hasError = true;
            newError.description = "Please enter the description"
        }
        if (!file) {
            hasError = true;
            newError.file = "Please upload you note pdf"
        }
        if (hasError) {
            setErrors(newError);
        }

        //API call
        else {
            const form = new FormData();
            form.append('notename', formData.notename);
            form.append('author', formData.author);
            form.append('category', formData.category);
            form.append('description', formData.description);
            form.append('file', file);

            setUploadStatus(true);
            console.log(user._id);
            
            axios.post(`http://localhost:8000/admin/notes/review/${user._id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {
                    console.log(res.data);
                    setIsModalOpen(false);
                    setUploadStatus(false);

                    Swal.fire({
                        title:res.data.message,
                        icon:'success',
                        confirmButtonText: "Check Status",
                    })
                    .then((res)=>{
                        if(res.isConfirmed) navigate('/profile/myuploads')
                    })

                    setUser(localStorage.setItem('user',JSON.stringify(res.data.user)))
                })
                .catch(err => {
                    console.log(err);

                })
        }

    }
    


    return (
        <>
            <Navbar />
            <div className='uploadPage pt-20 min-h-screen flex flex-col items-center px-4'>
                <div className="title w-full text-center">
                    <div className='heading text-2xl font-bold'>Share your valuable note</div>
                    <div className="text text-sm px-6 mt-4">Upload your <span className='font-bold'>notes</span> to help fellow learners, <span className='font-bold'>contribution</span>n is a main pillar of success!!</div>
                </div>
                <div className="main flex-1 w-full px-4 flex items-center justify-center">
                    <div className="uploadbox flex flex-col items-center border border-[#ffb300] py-4 px-4">
                        <div className="vectorImage text-center">
                            <img src={uploadImg} alt="" srcset="" className='w-full h-full object-cover' />
                        </div>
                        <div className="uploadButton bg-[#ffb300] w-full py-3 px-6 text-center text-[#191919] font-semibold rounded-md cursor-pointer hover:bg-orange-300 transition-all ease" onClick={() => { setIsModalOpen(!isModalOpen) }}>Create a Note</div>
                    </div>
                </div>

            </div>

            {/* modal */}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-120 relative text-center">
                        <div className="form">
                            <form className="bg-white rounded-lg w-full max-w-lg">
                                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create Your Note</h2>

                                {/* Flex Row for Name and Author Fields */}
                                <div className="flex flex-wrap -mx-2 mb-4">
                                    {/* Note name Field */}
                                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0 flex flex-col items-start">
                                        <label className="block text-gray-700 text-start text-sm font-medium mb-1" htmlFor="name">Note name</label>
                                        <input
                                            type="text"
                                            name="notename"
                                            id="name"
                                            className="w-full p-3 border border-gray-300 bg-[#dedede] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4a4a4]"
                                            placeholder="Name of the note"
                                            onChange={handleInput}
                                        />
                                        {errors.notename && <small className="text-start"style={{ color: 'red' }}>{errors.notename}</small>}
                                    </div>

                                    {/* Author Field */}
                                    <div className="w-full md:w-1/2 px-2 flex flex-col items-start">
                                        <label className="block text-gray-700 text-start text-sm font-medium mb-1" htmlFor="author">Author</label>
                                        <input
                                            type="text"
                                            name="author"
                                            id="author"
                                            className="w-full p-3 border border-gray-300 bg-[#dedede] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4a4a4]"
                                            placeholder="Enter author name"
                                            onChange={handleInput}
                                        />
                                        {errors.author && <small style={{ color: 'red' }}>{errors.author}</small>}
                                    </div>
                                </div>

                                {/* Category Field */}
                                <div className="mb-4 text-start">
                                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="w-full p-3 border border-gray-300 rounded-md bg-[#dedede] focus:outline-none focus:ring-2 focus:ring-[#a4a4a4]"
                                        onChange={handleInput}
                                    >
                                        <option value="">Select a category</option>
                                        <option value="Operating Systems">Operating Systems</option>
                                        <option value="DBMS">DBMS</option>
                                        <option value="AIML">AIML</option>
                                    </select>
                                    {errors.category && <small style={{ color: 'red' }}>{errors.category}</small>}
                                </div>

                                {/* Description Field */}
                                <div className="mb-4 text-start">
                                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        name='description'
                                        className="w-full p-3 border border-gray-300 rounded-md bg-[#dedede] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4a4a4] resize-none"
                                        placeholder="Enter description"
                                        onChange={handleInput}
                                        rows="3"
                                    />
                                    {errors.description && <small style={{ color: 'red' }}>{errors.description}</small>}
                                </div>



                                {/* File Upload Field */}
                                <div className="mb-6 text-start">
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fileUpload">
                                        Select Note (Only .pdf)
                                    </label>

                                    {/* Custom File Upload Field */}
                                    <div className="relative w-full">
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            id="fileUpload"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleFile}
                                        />
                                        <div className="bg-gray-50 border border-gray-300 text-gray-700 p-3 rounded-md flex items-center justify-between">
                                            <span>{file ? file.name : 'Choose a file'}</span>
                                            <button
                                                type="button"
                                                className="bg-[#ffb300] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#e0a200] transition-colors duration-200"
                                            >
                                                Browse
                                            </button>
                                        </div>
                                    </div>
                                    {errors.file && <small style={{ color: 'red' }}>{errors.file}</small>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={submitForm}
                                    type="submit"
                                    className="w-full bg-[#ffb300] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#e0a200] transition-colors duration-200"
                                >
                                    {uploadStatus ? 'Uploading...' : 'Upload Note'}
                                </button>
                            </form>
                        </div>


                        <button
                            className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
                            onClick={() => { setIsModalOpen(!isModalOpen); }}
                        >&times;</button>

                    </div>
                </div>
            )}
        </>

    )
}
