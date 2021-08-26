export const CATEGORIES_LOAD_START = "Categories/load/start";
export const CATEGORIES_LOAD_SUCCESS = "Categories/load/success";

const initState = {
  item: [],
  loading: false,
};

export const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case CATEGORIES_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_LOAD_SUCCESS:
      return {
        item: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const getCategories = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORIES_LOAD_START,
    });
    fetch(`/categories`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: CATEGORIES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};

