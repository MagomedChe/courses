const intState = {
  compare: [],
  loading: false,
};

export const compare = (state = intState, action) => {
  switch (action.type) {
    case "Compare/load/start":
      return {
        ...state,
        loading: true,
      };
    case "Compare/delete":
      return {
        ...state,
        compare: state.compare.filter((item) => item.id !== action.payload),
      };
    case "Compare/load/success":
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
