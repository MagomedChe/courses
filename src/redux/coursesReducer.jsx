import { COURSES_LOAD_START } from './type'
import { COURSES_LOAD_SUCCESS } from "./type";
import { COURSES_SELECTED } from "./type";

const initState = {
  courses: [],
  comments: [],
  commentsLoad: false,
  loading: false,
  coursesSelected: "",
  coursesSelectedLoad: true,
  selectedEditCourse: {}

};
export const coursesReducer = (state = initState, action) => {
  switch (action.type) {
    case COURSES_LOAD_START:
      return {
        ...state,
        loading: true,
      };
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
    case COURSES_LOAD_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    case COURSES_SELECTED:
      return {
        ...state,
        coursesSelected: state.courses.find(
          (item) => item.id === action.payload
        ),
        coursesSelectedLoad: false,
      };

    case 'select/load/start':
      return {
        ...state,
        loading: true
      }

    case 'select/load/success':
      return {
        ...state,
        selectedEditCourse: action.payload,
        loading: false
      }

    default:
      return {
        ...state,
      };
  }
};

export const AddCourse = (title, address, phone, price, categoryId) => {
  return () => {
    fetch('http://localhost:3001/courses', {
      method: 'POST',
      body: JSON.stringify({
        title,
        address,
        phone,
        price,
        categoryId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json())
      .then(() => {
        return {
          payload: {
            title,
            address,
            phone,
            price,
            categoryId,
          }

        }})
  }
}

export const loadCourseChange = (id, title, address, phone, price, categoryId) => {
  return (dispatch) => {
    dispatch({type: 'select/load/start'});
    fetch(`http://localhost:3001/courses/${id}`)
      .then(response => response.json())
      .then(() => {
        dispatch({
          type: 'select/load/success',
          payload: {
            title: title,
            address: address,
            phone: phone,
            price: price,
            categoryId: categoryId,
          }
        })
      })
  }
}


export const editCourse = (title, address, phone, price, categoryId, id) => {
  return () => {
    fetch(`http://localhost:3001/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        address,
        phone,
        price,
        categoryId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json())
      .then(() => {
        return {
          payload: {
            title,
            address,
            phone,
            price,
            categoryId,
          }

        }})
  }
}