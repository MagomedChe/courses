import { ADDED_FAVORITE, COURSES_LOAD_START, DELETED_FAVORITE } from './type'
import { COURSES_LOAD_SUCCESS } from "./type";

const initState = {
  courses: [],
  loading: false,
};


export const coursesReducer = (state = initState, action) => {
  switch (action.type) {
    case COURSES_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case COURSES_LOAD_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

