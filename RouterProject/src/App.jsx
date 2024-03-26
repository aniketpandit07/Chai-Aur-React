import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import PrivateRoute from './components/PrivateRoute'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className='bg-blue-400 flex flex-col h-screen'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>
        } />
      </Routes>
      <Toaster />

    </div>
  )
}

export default App
