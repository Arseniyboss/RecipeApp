import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
  GET_RECIPES_RESET,
} from "../../constants/recipe/list";

const initialState = {
  loading: true,
  recipes: [],
};

export const recipeListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES_REQUEST:
      return initialState;
    case GET_RECIPES_SUCCESS:
      return { loading: false, recipes: payload };
    case GET_RECIPES_FAIL:
      return { loading: false, error: payload };
    case GET_RECIPES_RESET:
      return initialState;
    default:
      return state;
  }
};
