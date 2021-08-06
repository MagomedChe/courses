import { ADDED_FAVORITE } from './type'

const initState = {
  items: [],
  loading: false,
};

export const favoritesReducer =(state = initState, action)=>{
  switch (action.type){
    case ADDED_FAVORITE:
      return {
        ...state,
        items: [...state.items , action.payload]
      };
    default:
      return {
        ...state
      }
  }
}