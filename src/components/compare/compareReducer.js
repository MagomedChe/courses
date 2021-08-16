const intState = {
  compare: [],
  loading: false,
};

export const compare = (state = intState, action) => {
  switch (action.type) {
    case "campare/load/start":
      return {
        ...state,
        loading: true,
      };
    case "compare/delete":
      return {
        ...state,
        compare: state.compare.filter(item => item.id !== action.payload)
      }
    case "compare/load/success":
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
