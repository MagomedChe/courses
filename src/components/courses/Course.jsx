import React from 'react'
import style from './courses.module.css'
import { useHistory } from 'react-router-dom'
import { ADDED_FAVORITE, COURSES_SELECTED } from '../../redux/type'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../../redux/actions'
import DeletedCourse from '../DeletedCourse'

function Course ({ item }) {
  const favorites = useSelector(state => state.favorites.items);
  const token = useSelector(state => state.auth.user.token);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFavorites = (item) => {
    dispatch({
      type: ADDED_FAVORITE,
      payload: item,
    });
  };
  const handleClick = (id) => {
    dispatch({
      type: COURSES_SELECTED,
      payload: id,
    });
    dispatch(getComments(id));
    history.push("/comments");
  };
  const handleReduct = () =>{
      history.push(`/editCourse/${item.id}`)
  }

  return (
    <div key={item.id} className={style.cours}>
      <div className={style.cours_title}>{item.title}</div>
      <div>Адресс: {item.address}</div>
      <div>Телефон: {item.phone}</div>
      <div>Стоимость: {item.price}p</div>
      <div className={style.cours_button}>
        {token &&
          <div style={{display: 'contents'}}>
            <button onClick={handleReduct}>Редактировать</button>
            <DeletedCourse item={item}/>
          </div>}
        <button onClick={()=>handleFavorites(item)}>{favorites.find(elment=>elment.id ===item.id)?'В избранном': 'В избранное'}</button>
        <button>Сравнить</button>
        <button onClick={() => handleClick(item.id)}>Отзывы</button>
      </div>
    </div>
  );
}

export default Course;
