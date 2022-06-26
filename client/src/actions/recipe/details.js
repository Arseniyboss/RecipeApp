import axios from "axios";
import {
  GET_RECIPE_DETAILS_REQUEST,
  GET_RECIPE_DETAILS_SUCCESS,
  GET_RECIPE_DETAILS_FAIL,
} from "../../constants/recipe/details";

export const getRecipeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_RECIPE_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/recipes/${id}`);
    dispatch({
      type: GET_RECIPE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_RECIPE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
