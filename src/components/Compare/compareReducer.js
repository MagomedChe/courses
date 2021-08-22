import { COMPARE_DELETE, COMPARE_LOAD_START, COMPARE_LOAD_SUCCESS } from '../../redux/types'

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
