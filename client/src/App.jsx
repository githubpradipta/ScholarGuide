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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/saves' element={<Saves/>}/>
      <Route path='/notes/:categoryID' element={<InnerNote/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </>
  )
}

export default App
