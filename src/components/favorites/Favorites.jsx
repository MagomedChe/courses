import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, loadCourses } from "../../redux/actions";
import style from "./favorite.module.css";
import FavoriteCourse from './FavoriteCourse'

function Favorites(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
    dispatch(getCategories());
  }, [dispatch]);

  const favorites = useSelector((state) => state.favorites.items);
  const loading = useSelector((state) => state.courses.loading);
  console.log(favorites)

  return (
    <div className={style.favorite_page}>
      <div className={style.favorite_page_title}>Избранное</div>
      {loading ? (
        <div className={style.cours_loading}>Загрузка...</div>
      ) : (
        <div className={style.favorite_page_box}>
          {favorites.map((item) => {
            return <FavoriteCourse item={item} key={item.id}/>
          })}
        </div>
      )}
    </div>
  );
}

export default Favorites;
