import {
  GET_RECIPE_DETAILS_REQUEST,
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_FAIL,
  GET_RECIPE_DETAILS_RESET,
} from "../../constants/recipe/details";

const initialState = {
  loading: true,
  recipe: {},
};

export const recipeDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_RECIPE_DETAILS_REQUEST:
      return initialState;
    case GET_RECIPE_DETAILS_SUCCESS:
      return { loading: false, recipe: payload };
    case GET_RECIPE_DETAILS_FAIL:
      return { loading: false, error: payload };
    case GET_RECIPE_DETAILS_RESET:
      return initialState;
    default:
      return state;
  }
};
