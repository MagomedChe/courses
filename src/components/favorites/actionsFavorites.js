import { DELETED_FAVORITE } from "../../redux/type";

export const deleteFavorite = (id) => {
  return {
    type: DELETED_FAVORITE,
    payload: id,
  };
};
