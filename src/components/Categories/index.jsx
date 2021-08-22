import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import Category from "./Category";

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
            return <Category category={category} key={category.id} />;
          })}
        </div>
      )}
    </div>
  );
}
export default Categories;
