import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, loadCourses } from "../../redux/actions";
import style from "./courses.module.css";
import Course from './Course'

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
              <Course item={item} key={item.id}/>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
