import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";

function Categories(props) {
  const categories = useSelector((state) => state.categories.item);
  const loading = useSelector((state) => state.categories.loading);

  return (
    <div className={style.categories}>
      <div className={style.categories_title}>Категории</div>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <div className={style.categories_box}>
          {categories.map((category) => {
            return (
              <div className={style.category} key={category.id}>
                <div>
                  <img
                    className={style.category_image}
                    src={category.image}
                    alt=""
                  />
                </div>
                <div className={style.category_title}>{category.title}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Categories;
