import React from "react";
import style from "./favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "./actionsFavorites";

function FavoriteCourse({ item }) {
  const favorite = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const removeFavorite = (id) => {
    dispatch(deleteFavorite(id));
  };

  return (
    <div>
      {favorite ? (
        <div key={item.id} className={style.cours}>
          <div className={style.cours_button}>
            <div onClick={() => removeFavorite(item.id)}>Удалить</div>
            <div>Сравнить</div>
          </div>
          <div className={style.cours_title}>{item.title}</div>
          <div>Адресс: {item.address}</div>
          <div>Телефон: {item.phone}</div>
          <div>Стоимость: {item.price}p</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FavoriteCourse;
