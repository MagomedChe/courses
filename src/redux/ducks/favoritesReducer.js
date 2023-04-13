export const DELETED_FAVORITE = "deleted/favorite";
export const ADDED_FAVORITE = "added/favorite";

const initState = {
  items: [],
  loading: false,
};

export const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDED_FAVORITE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETED_FAVORITE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
export const deleteFavorite = (id) => {
  return {
    type: DELETED_FAVORITE,
    payload: id,
  };
};
