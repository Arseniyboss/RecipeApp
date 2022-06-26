import { combineReducers } from "redux";
import { recipeListReducer } from "./list";
import { recipeDetailsReducer } from "./details";
import { recipeReviewCreateReducer } from "./createReview";

export const recipeReducer = combineReducers({
  recipeList: recipeListReducer,
  recipeDetails: recipeDetailsReducer,
  recipeReviewCreate: recipeReviewCreateReducer,
});
