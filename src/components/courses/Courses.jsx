import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCourses } from "../../redux/actions";
import style from "./courses.module.css";

function Courses(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses);
  return (
    <div>
      {courses.map((item) => {
        return <div key={item.id} className={style.cours}></div>;
      })}
    </div>
  );
}

export default Courses;
