import { combineReducers } from "redux";
import { recipeReducer } from "./recipe";
import { userReducer } from "./user";
import { favoritesReducer } from "./favorites";

export const reducer = combineReducers({
  recipe: recipeReducer,
  user: userReducer,
  favorites: favoritesReducer,
});
