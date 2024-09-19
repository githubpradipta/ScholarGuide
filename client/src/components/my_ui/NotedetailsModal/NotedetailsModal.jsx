import React, { useState } from 'react';
import PDFViewer from '../../PDFViewer/PDFViewer';
import { Link } from 'react-router-dom';
import defaultImg from '../../../assets/Images/DefaultProfileImage.png'
import LinkIcon from '../../../assets/Logo/LinkIcon';

export default function NotedetailsModal({ approveNote, status, show, onClose, note }) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  if (!show) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800  p-6 rounded-lg shadow-lg w-full max-w-md mx-4">


        <div className="authorDetails text-slate-500 ">

          <div className="heading mb-3">
            <h1 className='text-slate-50 text-md my-1 '>Author</h1>
            <hr className='border-2 w-1/4 rounded-xl' />
          </div>

          <div className="flex flex justify-center items-center gap-6 w-full bg-gray-700 my-4 px-4 py-4 rounded-xl">
            <div className="left w-[20%] h-full">
              <img src={defaultImg} alt="" className='w-full' />
            </div>
            <div className="right">
              <div className="value w-full text-xl font-bold text-[#ffb300]">{"Pradipta Banerjee"}</div>
              <div className="value w-full text-xs font-normal text-slate-300">{"banerjeepradipta08@gmail.com"}</div>
              <div className="value w-full text-xs font-normal text-slate-300 ">{"21BCS2279"}</div>
            </div>

          </div>

        </div>


        <div className="heading my-2 mb-3">
          <h1 className='text-slate-50 text-md my-1 '>Note Detals</h1>
          <hr className='border-2 w-1/3 rounded-xl' />
        </div>

        <div className="noteDetails relative text-slate-500 bg-gray-700 hover:bg-[#191919] hover:scale-105 transition-all duration-300 ease my-4 px-4 py-4 rounded-xl">


          <div className="flex flex-col">
            <div className="field text-xl text-[#ffb300] font-bold">{note.notename}</div>
            <div className="field text-xs text-blue-300 ">{note.category}</div>
            <div className="my-4 pr-10">
              <div className="field text-sm text-slate-300 mb-1">Description</div>
              <div className="field text-xs text-slate-400">{note.description}</div>
            </div>
          </div>

          <div className="date flex gap-4 items-center mt-6">
            <div className="name text-slate-400">Created on</div>
            <div className="dateVal text-slate-100 text-sm">{new Date(note.publishDate).toLocaleDateString('en-GB',options)}</div>
          </div>

          <Link className="link text-slate-400 hover:text-white cursor-pointer absolute top-2 right-3"
          to={note.note_url} target='_blank'
          >
            <LinkIcon/>
          </Link>

        </div>

        <div className="btns flex flex-row-reverse justify-center gap-3 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold text-xs px-4 py-2 rounded-md"
          >
            Close
          </button>
          <button className={`bg-green-300 hover:bg-green-600 text-[#191919] hover:text-white font-bold text-xs px-4 py-2 rounded-md transition-all ease ${status=='pending'?'':'hidden'}`} onClick={approveNote}>Approve</button>
          

        </div>



      </div>
    </div>
  );
};
