import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./actionsCourses";
import { loadCourses } from "./actionsCourses";
import style from "./courses.module.css";
import Course from "./Course";

function Courses(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
    dispatch(getCategories());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses);
  const filter = useSelector((state) => state.courses.filter);
  const loading = useSelector((state) => state.courses.loading);
  const filteredCourses = courses.filter(
    (course) => course.title.indexOf(filter) > -1
  );

  return (
    <div className={style.courses}>
      <div className={style.courses_title}>Список курсов</div>
      {loading ? (
        <div className={style.cours_loading}>Загрузка...</div>
      ) : (
        <div className={style.courses_box}>
          {filteredCourses.map((item) => {
            return <Course item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
