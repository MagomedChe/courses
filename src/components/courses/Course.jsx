import React  from 'react'
import style from './courses.module.css'
import { Link } from 'react-router-dom'
import { ADDED_FAVORITE } from '../../redux/type'
import { useDispatch, useSelector } from 'react-redux'

function Course ({ item }) {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  const handleFavorites=(item)=>{
      dispatch({
        type: ADDED_FAVORITE,
        payload: item
      })
  }

  return (
    <div key={item.id} className={style.cours}>
      <div className={style.cours_button}>
        <button disabled={favorites.find(element=> element.id === item.id)} onClick={()=>handleFavorites(item)}>{favorites.find(element=> element.id === item.id) ? "В Избранном": "В избранное"}</button>
        <button>Сравнить</button>
      </div>
      <div className={style.cours_title}>{item.title}</div>
      <div>Адресс: {item.address}</div>
      <div>Телефон: {item.phone}</div>
      <div>Стоимость: {item.price}p</div>
      <div className={style.cours_callback}>
        <div className={style.cours_email}>
          Email: {item.callback[0].email}
        </div>
        <div>{item.callback[0].preview}...</div>
        <div className={style.cours_open}>
          <Link to={""}>Развернуть...</Link>
        </div>
      </div>
    </div>
  )
}

export default Course