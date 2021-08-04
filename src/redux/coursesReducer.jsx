import { ADDED_FAVORITE, COURSE_ID, COURSES_LOAD_START, DELETED_FAVORITE } from './type'
import { COURSES_LOAD_SUCCESS } from "./type";

const initState = {
  courses: [],
  favorites: [],
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
    case ADDED_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, ...state.courses.filter((item)=>{
          if (item.id=== action.payload){
            return true
          }
          return false
        })]
      };
    case DELETED_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites.filter((item)=>{
          if (item.id ===action.payload){
            return false
          }
          return true
        })]
      }
    default:
      return {
        ...state,
      };
  }
};
