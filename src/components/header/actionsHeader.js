import { COURSES_LOAD_START, COURSES_LOAD_SUCCESS } from "../../redux/type";

export const setFilterText = (text) => {
  return {
    type: "filter/set",
    payload: text,
  };
};

export const loadCourses = () => {
  return (dispatch) => {
    dispatch({
      type: COURSES_LOAD_START,
    });
    fetch(`http://localhost:3001/courses`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: COURSES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
