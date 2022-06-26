import { combineReducers } from "redux";
import { addToFavoritesReducer } from "./add";
import { removeFromFavoritesReducer } from "./remove";

export const favoritesReducer = combineReducers({
  addToFavorites: addToFavoritesReducer,
  removeFromFavorites: removeFromFavoritesReducer,
});
