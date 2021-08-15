import React from 'react'
import style from './favorites.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite } from './actionsFavorites'

function FavoriteCourse ({ item }) {
  const favorite = useSelector(state => state.favorites.items)
  const dispatch =useDispatch()

  const removeFavorite =(id)=>{
    dispatch(deleteFavorite(id))
  }

  return (
    <div>
      {favorite? (
        <div key={item.id} className={style.cours}>
          <div className={style.cours_button}>
            <button onClick={()=>removeFavorite(item.id)}>Удалить</button>
            <button>Сравнить</button>
          </div>
          <div className={style.cours_title}>{item.title}</div>
          <div>Адресс: {item.address}</div>
          <div>Телефон: {item.phone}</div>
          <div>Стоимость: {item.price}p</div>
        </div>
      ):''}
    </div>
  )
}

export default FavoriteCourse