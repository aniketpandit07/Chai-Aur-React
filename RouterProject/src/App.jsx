import Navbar from './components/Navbar'
import Home from './Pages/Home'
 import Login from './Pages/Login'
 import SignUp from './Pages/SignUp'
 import Dashboard from './Pages/Dashboard'


import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    
    </>
  )
}

export default App
