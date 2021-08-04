import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, loadCourses } from "../../redux/actions";
import style from "./courses.module.css";
import {useHistory} from "react-router-dom";
import {COURSES_SELECTED} from "../../redux/type";

function Courses(props) {
  const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
    dispatch(getCategories());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);

  const handleClick = (id) =>{
    dispatch({
      type: COURSES_SELECTED,
      payload: id,
    })
    history.push("/comments")
  }

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
                    <div onClick={()=>handleClick(item.id)}>Развернуть...</div>
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
