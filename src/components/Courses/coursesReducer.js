import {
  ADD_NEW_COMMENT,
  COMMENT_LOAD_START, COMMENT_LOAD_SUCCESS,
  COURSE_ADD_START, COURSE_ADD_SUCCESS,
  COURSE_DELETE_START, COURSE_DELETE_SUCCESS,
  COURSES_LOAD_START, COURSES_LOAD_SUCCESS,
  COURSES_SELECTED, FILTER_SET,
  SELECT_LOAD_START, SELECT_LOAD_SUCCESS,
  SELECTED_CATEGORY_LOAD_SUCCESS
} from '../../redux/types'

const initState = {
  courses: [],
  comments: [],
  commentsLoad: false,
  loading: false,
  coursesSelected: "",
  filter: "",
  coursesSelectedLoad: true,
  selectedEditCourse: {},
  selectedLoading: false,
  deleting: false,
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
        courses: action.payload,
      };
    case COMMENT_LOAD_START:
      return {
        ...state,
        commentsLoad: true,
      };
    case COMMENT_LOAD_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        commentsLoad: false,
      };
    case ADD_NEW_COMMENT:
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
    case COURSE_ADD_START:
      return {
        ...state,
        loading: true,
      };

    case COURSE_ADD_SUCCESS:
      return {
        courses: action.payload,
        ...state,
        loading: false,
      };

    case SELECT_LOAD_START:
      return {
        ...state,
        selectedLoading: true,
      };

    case SELECT_LOAD_SUCCESS:
      return {
        ...state,
        selectedEditCourse: action.payload,
        selectedLoading: false,
      };

    case COURSE_DELETE_START:
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id === action.payload) {
            return {
              ...course,
              deleting: true,
            };
          }
          return course;
        }),
      };
    case COURSE_DELETE_SUCCESS:
      return {
        ...state,
        courses: state.courses.filter((course) => {
          if (course.id !== action.payload) {
            return true;
          }
          return false;
        }),
      };
    case FILTER_SET:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const AddCourse = (title, address, phone, price, categoryId) => {
  return (dispatch) => {
    dispatch({ type: COURSE_ADD_START });
    fetch("/courses", {
      method: "POST",
      body: JSON.stringify({
        title,
        address,
        phone,
        price,
        categoryId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: COURSE_ADD_SUCCESS,
          payload: {
            title,
            address,
            phone,
            price,
            categoryId,
          },
        });
      });
  };
};

export const loadCourseChange = (id) => {
  return (dispatch) => {
    dispatch({ type: SELECT_LOAD_START });
    fetch(`/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SELECT_LOAD_SUCCESS,
          payload: {
            title: json.title,
            address: json.address,
            phone: json.phone,
            price: json.price,
            categoryId: json.categoryId,
          },
        });
      });
  };
};

export const editCourse = (title, address, phone, price, categoryId, id) => {
  return () => {
    fetch(`/courses/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        address,
        phone,
        price,
        categoryId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        return {
          payload: {
            title: json.title,
            address: json.address,
            phone: json.phone,
            price: json.price,
            categoryId: json.categoryId,
          },
        };
      });
  };
};

export const deleteCourse = (id) => {
  return (dispatch) => {
    dispatch({
      type: COURSE_DELETE_START,
      payload: id,
    });
    fetch(`/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: COURSE_DELETE_SUCCESS,
          payload: id,
        });
      });
  };
};
