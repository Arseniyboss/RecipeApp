import {
  REMOVE_FAVORITE_RECIPE_REQUEST,
  REMOVE_FAVORITE_RECIPE_SUCCESS,
  REMOVE_FAVORITE_RECIPE_FAIL,
  REMOVE_FAVORITE_RECIPE_RESET,
} from "../../constants/favorites/remove";

const initialState = {
  loading: false,
};

export const removeFromFavoritesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case REMOVE_FAVORITE_RECIPE_REQUEST:
      return initialState;
    case REMOVE_FAVORITE_RECIPE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case REMOVE_FAVORITE_RECIPE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case REMOVE_FAVORITE_RECIPE_RESET:
      return initialState;
    default:
      return state;
  }
};
