import React, { useEffect } from 'react'
import style from './courses.module.css'
import { Link, useHistory } from 'react-router-dom'
import { ADDED_FAVORITE, COURSES_SELECTED } from '../../redux/type'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../../redux/actions'

function Course ({ item }) {
  const favorites = useSelector(state => state.favorites.items);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFavorites=(item)=>{
      dispatch({
        type: ADDED_FAVORITE,
        payload: item
      })
  }
  const handleClick = (id) => {
    dispatch({
      type: COURSES_SELECTED,
      payload: id,
    });
    dispatch(getComments(id));
    history.push("/comments");
  };



  return (
    <div key={item.id} className={style.cours}>
      <div className={style.cours_title}>{item.title}</div>
      <div>Адресс: {item.address}</div>
      <div>Телефон: {item.phone}</div>
      <div>Стоимость: {item.price}p</div>
      <div className={style.cours_button}>
        <Link to={`/editCourse/${item.id}`}>Редактировать</Link>
        <div onClick={()=>handleFavorites(item)}>{favorites.find(elment=>elment.id ===item.id)?'В избранном': 'В избранное'}</div>
        <div>Сравнить</div>
        <div onClick={() => handleClick(item.id)}>Отзывы</div>
      </div>
    </div>
  )
}

export default Course