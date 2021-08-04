import { CATEGORIES_LOAD_START } from "./type";
import { CATEGORIES_LOAD_SUCCESS } from "./type";

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
