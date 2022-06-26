import {
  ADD_FAVORITE_RECIPE_REQUEST,
  ADD_FAVORITE_RECIPE_SUCCESS,
  ADD_FAVORITE_RECIPE_FAIL,
  ADD_FAVORITE_RECIPE_RESET,
} from "../../constants/favorites/add";

const initialState = {
  loading: false,
  favorites: [],
};

export const addToFavoritesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_FAVORITE_RECIPE_REQUEST:
      return { ...state, loading: true };
    case ADD_FAVORITE_RECIPE_SUCCESS:
      return {
        loading: false,
        success: true,
        favorites: payload,
      };
    case ADD_FAVORITE_RECIPE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ADD_FAVORITE_RECIPE_RESET:
      return initialState;
    default:
      return state;
  }
};
