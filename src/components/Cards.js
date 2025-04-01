import React from 'react'
import Card from './Card'
const Cards = ({courses}) => {
  let allCourses=[]
  const getCourses=()=>{
    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course)=>{
        allCourses.push(course)
      })
    })
    console.log(`all array ${allCourses}`)
    return allCourses;
  }
  return (
    <div>
      {
        getCourses().map((course)=>{
          return(
          <Card key={course.id} courses={course}/>
          )
        })
      }
    </div>
  )
}

export default Cards
