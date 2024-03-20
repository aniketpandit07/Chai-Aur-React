import React from 'react'
import { useNavigate } from 'react-router-dom'


const Labs = () => {

  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about")
  }
  return (
    <>
      <div className='mt-5'>
        This is Labs Page
      </div>
      <button onClick={clickHandler} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80 mt-5'>Move to about</button>

    </>
  )
}

export default Labs
