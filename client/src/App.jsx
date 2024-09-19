import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Page404 from './pages/404 Page/Page404'
import Notes from './pages/Notes/Notes'
import InnerNote from './pages/InnerNote/InnerNote'
import Saves from './pages/Saves/Saves'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/EditProfile/EditProfile'
import ImageUpload from './pages/ImageUpload/ImageUpload'
import Upload from './pages/Upload/Upload'
import MyUploads from './pages/MyUploads/MyUploads'
import Review from './pages/Review/Review'

function App() {
  const [count, setCount] = useState(0)
  const [scrolled,setScrolled] = useState(0);
  window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100)
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

  return (
    <>
    {/* <div id="progress-bar"></div> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/review/:status' element={<Review/>}/>
      <Route path='/profile/saves' element={<Saves/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/profile/myuploads' element={<MyUploads/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/edit' element={<EditProfile/>}/>
      <Route path='/profile/edit/upload' element={<ImageUpload/>}/>
      <Route path='/notes/:categoryID' element={<InnerNote/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </>
  )
}

export default App
