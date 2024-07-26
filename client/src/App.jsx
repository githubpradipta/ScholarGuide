import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
