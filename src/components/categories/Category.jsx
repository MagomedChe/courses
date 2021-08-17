import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { selectedCategory } from "./actionsCategories";

function Category({ category }) {
  const dispatch = useDispatch();

  const handleCategory = (id) => {
    dispatch(selectedCategory(id));
  };

  return (
    <div className={style.category} key={category.id}>
      <div onClick={() => handleCategory(category.id)}>
        <img className={style.category_image} src={category.image} alt="" />
      </div>
      <div className={style.category_title}>{category.title}</div>
    </div>
  );
}

export default Category;
