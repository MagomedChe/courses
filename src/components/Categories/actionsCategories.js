import {
  SELECTED_CATEGORY_LOAD_START,
  SELECTED_CATEGORY_LOAD_SUCCESS,
} from "../../redux/types";

export const selectedCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: SELECTED_CATEGORY_LOAD_START,
    });
    fetch(`/courses/?categoryId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SELECTED_CATEGORY_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
