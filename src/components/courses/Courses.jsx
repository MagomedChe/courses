import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getComments, loadCourses } from "../../redux/actions";
import style from "./courses.module.css";
import { COURSES_SELECTED } from "../../redux/type";
import { useHistory } from "react-router-dom";

function Courses(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (id) => {
    dispatch({
      type: COURSES_SELECTED,
      payload: id,
    });
    dispatch(getComments(id));
    history.push("/comments");
  };

  useEffect(() => {
    dispatch(loadCourses());
    dispatch(getCategories());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);

  return (
    <div className={style.courses}>
      <div className={style.courses_title}>Список курсов</div>
      {loading ? (
        <div className={style.cours_loading}>Загрузка...</div>
      ) : (
        <div className={style.courses_box}>
          {courses.map((item) => {
            return (
              <div key={item.id} className={style.cours}>
                <div className={style.cours_title}>{item.title}</div>
                <div>Адресс: {item.address}</div>
                <div>Телефон: {item.phone}</div>
                <div>Стоимость: {item.price}p</div>
                <div className={style.cours_button}>
                  <div>Избранное</div>
                  <div>Сравнить</div>
                  <div onClick={() => handleClick(item.id)}>Отзывы</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
