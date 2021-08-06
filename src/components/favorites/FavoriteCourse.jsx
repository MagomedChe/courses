import React, { useState } from 'react'
import style from './courses.module.css'
import { useDispatch } from 'react-redux'
import { ADDED_FAVORITE } from '../../redux/type'

function FavoriteCourse ({ item }) {
  const [favorite, setFavorite]= useState(false)
  const dispatch = useDispatch();

  const handleFavorites=(id)=>{
    setFavorite(!favorite)
    dispatch({
      type: ADDED_FAVORITE,
      payload: id
    })
  }
  return (
    <div>
      {favorite? (
        <div className={style.cours}>
          <div className={style.cours_button}>
            <button disabled={favorite} onClick={()=>handleFavorites(item.id)}>{favorite? "В Избранном": "В избранное"}</button>
            <button>Сравнить</button>
          </div>
        </div>
      ):''}
    </div>
  )
}

export default FavoriteCourse