import { CATEGORIES_LOAD_START } from "../../redux/types";
import { CATEGORIES_LOAD_SUCCESS } from "../../redux/types";

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
