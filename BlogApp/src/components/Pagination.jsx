import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext)
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='w-full max-w-[550px] flex justify-between items-center my-3  '>
        <div className='flex gap-x-3'>
          {page > 1 &&
            <button
              className='rounded-md border bg-white px-3 py-1'
              onClick={() => handlePageChange(page - 1)}>Previous</button>
          }

          {page < totalPages &&
            <button
              className='rounded-md border bg-white px-3 py-1'
              onClick={() => handlePageChange(page + 1)}>Next</button>
          }
        </div>

        <div>
          <p className='font-bold text-sm'>Page {page} of {totalPages}</p>
        </div>

      </div >

    </div>
  )
}

export default Pagination
