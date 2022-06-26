import axios from "axios";
import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
} from "../../constants/recipe/list";

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_RECIPES_REQUEST });
    const { data } = await axios.get("/api/recipes");
    dispatch({
      type: GET_RECIPES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_RECIPES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
