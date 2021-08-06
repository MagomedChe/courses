import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, loadCourses } from "../../redux/actions";
import style from "./courses.module.css";
import FavoriteCourse from './FavoriteCourse'

function Favorites(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
    dispatch(getCategories());
  }, [dispatch]);

  const favorites = useSelector((state) => state.courses.favorites);
  const loading = useSelector((state) => state.courses.loading);

  return (
    <div className={style.courses}>
      <div className={style.courses_title}>Избранное</div>
      {loading ? (
        <div className={style.cours_loading}>Загрузка...</div>
      ) : (
        <div className={style.courses_box}>
          {favorites.map((item) => {
            return <FavoriteCourse item={item} key={item.id}/>
          })}
        </div>
      )}
    </div>
  );
}

export default FavoriteCourse;
