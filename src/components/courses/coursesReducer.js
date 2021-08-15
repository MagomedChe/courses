import { COURSES_LOAD_START, SELECTED_CATEGORY_LOAD_SUCCESS } from '../../redux/type'
import { COURSES_LOAD_SUCCESS } from "../../redux/type";
import { COURSES_SELECTED } from "../../redux/type";

const initState = {
  courses: [],
  comments: [],
  commentsLoad: false,
  loading: false,
  coursesSelected: "",
  filter: "",
  coursesSelectedLoad: true,
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
    case SELECTED_CATEGORY_LOAD_SUCCESS:
      return {
        ...state,
        courses: action.payload
      }
    case "comment/load/start":
      return {
        ...state,
        commentsLoad: true,
      };
    case "comment/load/success":
      return {
        ...state,
        comments: action.payload,
        commentsLoad: false,
      };
    case "add/new/comment":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case COURSES_SELECTED:
      return {
        ...state,
        coursesSelected: state.courses.find(
          (item) => item.id === action.payload
        ),
        coursesSelectedLoad: false,
      };
    case 'filter/set':
      return {
        ...state,
        filter: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

