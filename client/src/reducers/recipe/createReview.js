import {
  RECIPE_CREATE_REVIEW_REQUEST,
  RECIPE_CREATE_REVIEW_SUCCESS,
  RECIPE_CREATE_REVIEW_FAIL,
  RECIPE_CREATE_REVIEW_RESET,
} from "../../constants/recipe/createReview";

const initialState = {
  loading: true,
};

export const recipeReviewCreateReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case RECIPE_CREATE_REVIEW_REQUEST:
      return initialState;
    case RECIPE_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case RECIPE_CREATE_REVIEW_FAIL:
      return { loading: false, error: payload };
    case RECIPE_CREATE_REVIEW_RESET:
      return initialState;
    default:
      return state;
  }
};
