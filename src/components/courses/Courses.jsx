import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadCourses } from '../../redux/actions'

function Courses (props) {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(loadCourses())
  })
  return (
    <div>

    </div>
  )
}

export default Courses