import React, { useState } from 'react'
import Card from './Card'

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([])
  let allCourses = []

  //it returns a list of all courses received from the api responce
  const getCourses = () => {
    if(category==="All"){
      //all category data pass
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courses) => {
          allCourses.push(courses)
        })
      })
      return allCourses
    }
    else{
      //specific category data passed
      return courses[category]
    }
   
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses}
            setLikedCourses={setLikedCourses} />
        })
      }
    </div>
  )
}

export default Cards
