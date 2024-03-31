import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {
  //consuming context

  const { posts, loading } = useContext(AppContext)
  return (
    <div className='w-11/12 max-w-[550px] py-3 flex flex-col gap-y-7 mt-[70px] mb-[70px] justify-center items-center h-screen'>
      {
        loading ?
          (<Spinner />) :
          (
            posts.length === 0 ?
              (<div>
                <p>No posts found</p>
              </div>) :
              (posts.map((posts) => (
                <div key={posts.id}>
                  <p className='font-bold text-sm'>{posts.title}</p>
                  <p className='text-xs italic'>By <span>{posts.author}</span> on <span className='underline font-bold'>{posts.category}</span></p>
                  <p className='text-xs'>postsed on {posts.date}</p>
                  <p className='text-sm mt-4'>{posts.content}</p>
                  <div className='flex gap-2 mt-2'>
                    {posts.tags.map((tag, index) => {
                      return <span key={index} className='text-blue-500 underline text-xs font-bold'>{`#${tag}`}</span>
                    })}
                  </div>
                </div>
              )))
          )
      }
    </div>
  )
}

export default Blogs
