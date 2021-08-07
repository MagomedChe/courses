import React from 'react'
import { NavLink } from 'react-router-dom'

function AddCourses (props) {



  return (
    <NavLink to={"/addCourse"}>
      <div>
        Добавить курс
      </div>
    </NavLink>
  )
}

export default AddCourses;