import { COURSES_LOAD_START } from "./type";
import { COURSES_LOAD_SUCCESS } from "./type";
import { COURSES_SELECTED } from "./type";

const initState = {
  courses: [],
  loading: false,
  coursesSelected: [],
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
        courses: action.payload,
        loading: false,
      };
    case COURSES_SELECTED:
      return {
        ...state,
        coursesSelected: state.courses.filter((item)=> item.id === action.payload)
      }

    default:
      return {
        ...state,
      };
  }
};
