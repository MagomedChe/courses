import { DELETED_FAVORITE } from "../../redux/types";

export const deleteFavorite = (id) => {
  return {
    type: DELETED_FAVORITE,
    payload: id,
  };
};
