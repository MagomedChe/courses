import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, loadCourses } from "../../redux/actions";
import style from "./courses.module.css";
import { Link } from "react-router-dom";

function Courses(props) {
  const dispatch = useDispatch();
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
                <div className={style.cours_button}>
                  <button>Избранное</button>
                  <button>Сравнить</button>
                </div>
                <div className={style.cours_title}>{item.title}</div>
                <div>Адресс: {item.address}</div>
                <div>Телефон: {item.phone}</div>
                <div>Стоимость: {item.price}p</div>
                <div className={style.cours_callback}>
                  <div className={style.cours_email}>
                    Email: {item.callback[0].email}
                  </div>
                  <div>{item.callback[0].preview}...</div>
                  <div className={style.cours_open}>
                    <Link to={""}>Развернуть...</Link>
                  </div>
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
