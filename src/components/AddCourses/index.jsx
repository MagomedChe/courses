import React from 'react'
import { useDispatch } from 'react-redux'

function AddCourses (props) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(AddCours())
  }

  return (
    <div onClick={handleAdd}>
        Добавить курс
    </div>
  )
}

export default AddCourses;