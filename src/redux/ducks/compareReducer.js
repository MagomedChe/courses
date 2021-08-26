export const COMPARE_LOAD_START ="compare/load/start";
export const COMPARE_LOAD_SUCCESS ="compare/load/success";
export const COMPARE_DELETE = "compare/delete";

const intState = {
  compare: [],
  loading: false,
};

export const compare = (state = intState, action) => {
  switch (action.type) {
    case COMPARE_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case COMPARE_DELETE:
      return {
        ...state,
        compare: state.compare.filter((item) => item.id !== action.payload),
      };
    case COMPARE_LOAD_SUCCESS:
      return {
        ...state,
        compare: [...state.compare, action.payload],
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

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

