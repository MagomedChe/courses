import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories, loadCourses } from "../../redux/actions";
import style from "./courses.module.css";
import Course from './Course'
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

  // const handleClick = (id) =>{
  //   dispatch({
  //     type: COURSES_SELECTED,
  //     payload: id,
  //   })
  //   history.push("/comments")
  // }


  return (
    <div className={style.courses}>
      <div className={style.courses_title}>Список курсов</div>
      {loading ? (
        <div className={style.cours_loading}>Загрузка...</div>
      ) : (
        <div className={style.courses_box}>
          {courses.map((item) => {
            return <Course item={item} key={item.id}/>
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
