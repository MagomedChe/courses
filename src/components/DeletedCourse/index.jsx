import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCourse } from '../../redux/coursesReducer'

function DeletedCourse ({item}) {
  const dispatch = useDispatch();


  const handleDelete = () => {
    dispatch(deleteCourse(item.id))
  }

  return (
    <button onClick={handleDelete}>
      Удалить
    </button>
  )
}

export default DeletedCourse