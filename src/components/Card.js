import React from 'react'
import {FcLike} from 'react-icons/fc'
const Card = ({courses}) => {
  console.log(`inside card ${courses}`)
  return (
    <div>
      <div>
        <img src={courses.image.url} alt="course"/>
      </div>
      <div>
        <button>
           <FcLike/>
        </button>
      </div>
      <div>
        <p>{courses.title}</p>
        <p>{courses.description}</p>
      </div>
    </div>
  )
}

export default Card
