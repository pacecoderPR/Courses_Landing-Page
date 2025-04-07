import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
const Card = (props) => {
  let courses=props.courses
  let likeCourses=props.likeCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler() {
    if(likeCourses.includes(courses.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>cid !==courses.id))
      toast.warning("liked removed")
    }
    else{
       if(likeCourses.length ===0){
        setLikedCourses([courses.id])
       }
       else{
        setLikedCourses((prev)=>[...prev,courses.id])
       }
       toast.success("liked successfully")
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={courses.image.url} alt="course"/>
        <div className='w-[40px]h-[40px] bg-white rounded-full absolute right-2 bottom-3
        grid place-items-center'>
        <button onClick={clickHandler}>
          {
            likeCourses.includes(courses.id) ?   <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>
          }
         
        </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{courses.title}</p>
        <p className='text-white mt-2'>{
          courses.description.length>100 ? courses.description.slice(0,100)+"...":courses.description
          }</p>
      </div>
    </div>
  )
}

export default Card
