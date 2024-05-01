import React from 'react'

const Background = () => {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
       <div className='absolute w-full py-10 top-12  flex justify-center text-zinc-200 text-xl font-semibold'>Documents</div>
      <h1 className='absolute text-[10vw] leading-none tracking-tight top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-zinc-900 '>Docs.</h1>
    </div>
    </>
  )
}

export default Background
