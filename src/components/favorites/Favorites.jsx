import React from "react";
import { useSelector } from "react-redux";
import FavoriteCourse from "./FavoriteCourse";
import style from "./favorite.module.css";

function Favorites(props) {
  const favorites = useSelector((state) => state.favorites.items);
  const loading = useSelector((state) => state.courses.loading);

  return (
    <div className={style.favorite_page}>
      <div className={style.favorite_page_title}>Избранное</div>
      {loading ? (
        <div className={style.cours_loading}>Загрузка...</div>
      ) : (
        <div className={style.favorite_page_box}>
          {favorites.map((item) => {
            return <FavoriteCourse item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Favorites;
