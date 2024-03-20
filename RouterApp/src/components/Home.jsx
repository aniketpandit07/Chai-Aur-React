import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  function backHandler() {
    navigate(-1)
  }
  return (
    <>
      <div>
        This is my  Home Page
      </div>
      <button onClick={backHandler} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80 mt-5' >Go Back</button>
    </>
  )
}

export default Home
