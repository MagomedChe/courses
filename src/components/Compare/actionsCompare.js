import { COMPARE_LOAD_START, COMPARE_LOAD_SUCCESS } from '../../redux/types'

export const addToComparison = (id) => {
  return (dispatch) => {
    dispatch({
      type: COMPARE_LOAD_START,
    });
    fetch(`/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: COMPARE_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
