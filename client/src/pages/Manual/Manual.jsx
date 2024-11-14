import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import LeftArrow from '../../assets/Logo/LeftArrow';
import Unsave from '../../assets/Logo/Unsave';
import EditIcon from '../../assets/Logo/EditIcon';
import ManualImg from '../../assets/Images/manual.svg'


export default function Manual() {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-900 min-h-screen py-6 px-2'>
      <header className='flex items-center w-full text-gray-400'>
        <div className="cursor-pointer" onClick={() => { navigate(-1) }}><LeftArrow /></div>
        <h1 className="text-2xl font-medium pr-4 flex-1 text-center">User Manual</h1>
      </header>

      <div className="content mt-8">
        <div className="top flex flex-col lg:flex-row items-center justify-center lg:px-32 ">
          <img src={ManualImg} alt="" srcset="" className='w-[80%] md:w-1/2 lg:w-1/3' />
          <div className="text text-center lg:text-start lg:pl-10">
            <h1 className="text-orange-200 text-2xl font-semibold">Confused how to use?</h1>
            <p className="text-sm text-gray-400 px-6 md:px-24 lg:p-0 lg:pr-10 mt-3">Here’s a refined guide to help you use ScholarGuide efficiently, covering all aspects to ensure smooth navigation, from uploading to downloading notes and beyond.</p>
          </div>
        </div>

        <div className="manual mt-8 md:px-6 lg:px-10 ">
          <div className="heading mx-4">
            <h1 className="text-3xl text-yellow-500 font-bold text-center">ScholarGuide Manual</h1>
          </div>

          <div className="content mt-8 text-gray-300">

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>1. Getting Started</h1>
              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl">
                <p className='text-sm'>To begin using ScholarGuide, simply visit the homepage at <b className='bg-slate-900 px-1.5 py-0.5 rounded-md'>ScholarGuide.com</b> . Here you can explore the platform, view publicly available content, or register to access additional features like uploading and saving notes.</p>

              </div>
            </div>

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>2. User Registration & Login</h1>

              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl ">
                <p className='text-sm'>To begin using ScholarGuide, simply visit the homepage at ScholarGuide.com. Here you can explore the platform, view publicly available content, or register to access additional features like uploading and saving notes.</p>

                <div className="sub-body">
                  <div className="font-bold my-2 text-xl">Step 1: Create an Account</div>

                  <div className="text-sm  leading-relaxed">
                    <li>Click on the <b>Sign Up</b> button on the homepage.</li>
                    <li>Fill in the required fields (e.g., name, email, password).</li>
                    <li>Register yourself by clicking <b>Register</b> button.</li>

                  </div>
                </div>

                <hr className='border-slate-700 my-4'/>

                <div className="sub-body">
                  <div className="font-bold my-2 text-xl">Step 2: Login</div>

                  <div className="text-sm  leading-relaxed">
                    <li>Click the <b>Login</b> button.</li>
                    <li>Enter your registered email or username and password.</li>
                    <li>You will be redirected to your dashboard upon successful login</li>

                  </div>
                </div>

              </div>

            </div>

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>3. Uploading Notes</h1>
              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl">

                <div className="text-sm leading-loose">
                  <li>Login to your account.</li>
                  <li>Navigate to the <b>Upload</b> section from the home page</li>
                  <li>Click on the <b>Create Note</b> button.
                  </li>
                  <li>Fill in the note details</li>
                  <li>Click <b>Upload</b> to send your notes for admin review</li>
                  <li>Once the admin approves your notes, they will be made publicly available for others to download.</li>

                </div>
              </div>
            </div>

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>4. Viewing and Downloading Notes</h1>
              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl">

                <div className="text-sm leading-loose">
                  <li>Navigate to the <b>Notes</b> section after logging in.</li>
                  <li>Go to the category in which you want to search note and click <b>Access</b> button.</li>
                  <li>Get all the available notes on that category odered on the basis of rating.
                  </li>
                  <li>Clicking on the note card you can open that specific note and can download from there.</li>

                </div>
              </div>
            </div>

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>5. Saving and Removing Favorite Notes</h1>
              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl">

                <div className="text-sm leading-loose">
                  <li>While viewing a note, click the <Unsave/> icon to add it to your list of saved notes.</li>
                  <li>Access your saved notes anytime by navigating to <b>{'Profile -> My Saves'}</b> section.</li>
                  <li>By clicking the <b>Delete</b> button you can remove that note form your saves.
                  </li>
                  <li>Clicking <b>Delete All</b> leads to removing all your save notes.</li>

                </div>
              </div>
            </div>

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>6. User Settings and Profile</h1>
              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl">

                <div className="text-sm leading-loose">
                  <li>Access your profile by clicking on your name at the top-right corner of the page.</li>
                  <li>You can edit your name, email, and other personal details by navigating <b>{"Profile -> Edit Profile"}</b> or by clicking <EditIcon/> icon.</li>
                  <li>Update your password anytime by navigating to the <b>{"Profile -> Change Password"}</b> section.
                  </li>
                  <li> If you no longer wish to use ScholarGuide, you can delete your account from <b>{"Profile -> Delete Account"}</b>.</li>

                </div>
              </div>
            </div>

            <div className="subcontent my-8 px-2">
              <h1 className='text-xl font-semibold border-b border-gray-600 pb-3'>7. Support</h1>
              <div className="body bg-slate-800 py-3 px-4 mt-3 rounded-xl">
                <h1>If you encounter any issues while using ScholarGuide or have additional questions, feel free to reach out to our support team.</h1>

                <hr className='border-slate-700 my-4'/>
                <div className="text-sm leading-loose">
                  <li>Email: <b>banerjeepradipta08@gmail.com</b></li>
                  <li>Phone: <b>+91 9038588162</b></li>
                  <li>Support Hours: Monday to Friday, 9 AM to 5 PM (GMT)</li>
                  <li>For mor detailed information go to <b className='cursor-pointer' onClick={()=>{navigate('/support')}}>Support</b> section.</li>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  )
}
