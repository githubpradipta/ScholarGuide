import React, { useEffect, useState } from 'react'
import Navbar from '../../components/my_ui/Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import DefaultProfile from '../../assets/Images/DefaultProfileImage.png'
import RightArrow2 from '../../assets/Logo/RightArrow2'
import NotedetailsModal from '../../components/my_ui/NotedetailsModal/NotedetailsModal'
import axios from 'axios'
import Swal from 'sweetalert2'
import PDFViewer from '../../components/PDFViewer/PDFViewer'



// This page is only for Admins
export default function Review() {

  const [pendingNotes, setpendingNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [approvedNotes, setApprovedNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { status } = useParams();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };


  const approveNote = (noteId) => {
    axios.post(`http://localhost:8000/notes/approvednote/${noteId}`)
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          icon: "success",
          confirmButtonText: 'Ok'
        })

        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);

      })
  }

  const deleteNote = (noteId) => {
    console.log('ok');

    axios.post(`http://localhost:8000/notes/deletenote/${noteId}`)
      .then((res) => {

        Swal.fire({
          title: 'Note deleted',
          icon: 'success',
        })

        setRefresh(!refresh);
      })
      .catch((err) => {

        Swal.fire({
          title: 'Server error',
          icon: 'error',
          confirmButtonText: 'Retry'
        })

      })
  }

  
  const handleOpenModal = (item) => {
    setSelectedNote(item);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    
    setShowModal(false);
    setSelectedNote(null);
  };

  console.log(showModal);
  
  
  useEffect(() => {
    // getting pending notes
    setLoading(true);
    axios.get('http://localhost:8000/admin/notes/getpendings')
      .then((res) => {
        setpendingNotes(res.data);
      })
      .catch((err) => {
        console.log(err);

      })

    // getting approved notes
    axios.get('http://localhost:8000/notes/notes')
      .then((res) => {
        setApprovedNotes(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

      })

  }, [refresh, status])


  return (
    <>
      <Navbar />
      <NotedetailsModal />
      <div className='reviewPage pt-24 min-h-screen px-2'>
        <div className="navigate w-full flex justify-center items-center">

          <Link to={'/review/pending'} className={`Pending mx-6 text-sm font-medium text-slate-500 bg-gray-300 ${status == 'pending' ? 'bg-gray-400 text-slate-600' : ''} px-4 py-1.5 rounded-2xl relative`}>
            Pending
            <div className={`absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white ${pendingNotes.length != 0 ? 'block' : 'hidden'}`}></div>
          </Link>

          <Link to={'/review/approved'} className={`Approved mx-6 text-sm font-medium text-slate-500 bg-gray-300 ${status == 'approved' ? 'bg-gray-400 text-slate-600' : ''} px-4 py-1.5 rounded-2xl relative`}>
            Approved
            <div className={`absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white hidden`}></div>
          </Link>

        </div>
        <hr className="border border-[#cbd5e1] mx-2 my-4" />

        <div className="itemBox px-2 h-full">
          <div className="itemHeading">
            <div className="heading text-slate-600 text-xl font-medium">{`${status == 'pending' ? 'Requests for approval' : 'Approved notes'} (${(status == 'pending' ? pendingNotes : approvedNotes).length})`}</div>
          </div>

          <div className="cardBox my-4 h-full">
            {
              (status == 'pending' ? pendingNotes : approvedNotes).length != 0 ?

                (status == 'pending' ? pendingNotes : approvedNotes).map((item) => {
                  return (
                    <div className="itemCard bg-gray-100 rounded-xl flex justify-between items-center px-4 py-4 lg:py-6 lg:md:px-4 lg:px-8 my-2">
                      <div className="left flex justify-between md:w-full  items-center gap-2">

                        <div className="authorDetails flex flex-1 items-center">
                          <img src={DefaultProfile} alt="" className="picture w-14 h-14" />

                          <div className="text flex flex-col justify-center mx-2">
                            <div className="name text-[13px] md:text-[16px] font-semibold">{item.author}</div>
                            <div className="username text-xs text-slate-400">username</div>
                          </div>

                        </div>

                        <div className="noteDetails flex flex-1 justify-start itmas-center hidden md:block">
                          <div className="noteName text-[16px] font-semibold">{item.notename}</div>
                          <div className="category text-xs text-slate-400">{item.category}</div>
                        </div>

                        <div className="dateDetails flex flex-1 justify-start itmas-center hidden lg:block">
                          <div className="Date hidden md:block text-[16px] font-semibold">{new Date(item.publishDate).toLocaleDateString('en-GB',options)}</div>
                        </div>

                      </div>

                      <div className="btns flex items-center gap-1">

                        {/* Button */}
                        <div
                          className="NoteDetails hidden md:block text-sm font-semibold text-slate-300 bg-gray-800 hover:bg-slate-700 px-4 py-1.5 mx-6 rounded-md transition-all delay-75 ease cursor-pointer"
                          onClick={() => { handleOpenModal(item) }}
                        >
                          Details
                        </div>

                        {/* Modal */}
                        <NotedetailsModal approveNote={()=>{approveNote(item._id)}}  note={selectedNote} show={showModal} onClose={() => { handleCloseModal() }} />

                        <div className={`approve text-[9px] md:text-sm font-semibold text-green-800 bg-green-200 hover:bg-green-300 px-4 py-1.5 rounded-md transition-all delay-75 ease cursor-pointer ${status == 'approved' ? 'hidden' : 'block'}`} onClick={() => { approveNote(item._id) }}>Approve</div>
                        <div className="reject text-[9px] md:text-sm font-semibold text-red-800 bg-red-200 hover:bg-red-300 px-4 py-1.5 rounded-md transition-all delay-75 ease cursor-pointer" onClick={() => { deleteNote(item._id) }}>{status == 'pending' ? 'Reject' : 'suspend'}</div>
                        {/* <RightArrow2 /> */}
                      </div>

                    </div>
                  )
                })
                :
                <>
                  <div className="w-full flex justify-center items-center mt-8 text-slate-400 text-xl font-medium">{status == 'pending' ? 'No notes available for approval' : 'There are no approved notes'}</div>
                </>
            }

          </div>



        </div>
      </div>
    </>

  )
}
