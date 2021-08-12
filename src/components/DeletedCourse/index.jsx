import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCourse } from '../../redux/coursesReducer'

function DeletedCourse (props) {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);

  const handleDelete = (id) => {
    dispatch(deleteCourse(id))
  }

  return (
    <button onClick={() => handleDelete(courses.id)} disabled={courses.deleting}>
      DELETED
    </button>
  )
}

export default DeletedCourse