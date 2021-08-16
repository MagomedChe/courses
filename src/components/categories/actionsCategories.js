import {
  SELECTED_CATEGORY_LOAD_START,
  SELECTED_CATEGORY_LOAD_SUCCESS,
} from "../../redux/type";

export const selectedCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: SELECTED_CATEGORY_LOAD_START,
    });
    fetch(`http://localhost:3001/courses/?categoryId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SELECTED_CATEGORY_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
