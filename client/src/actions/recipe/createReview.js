import axios from "axios";
import {
  RECIPE_CREATE_REVIEW_REQUEST,
  RECIPE_CREATE_REVIEW_SUCCESS,
  RECIPE_CREATE_REVIEW_FAIL,
} from "../../constants/recipe/createReview";

export const createRecipeReview =
  (id, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: RECIPE_CREATE_REVIEW_REQUEST,
      });
      const {
        user: {
          userLogin: { userInfo },
        },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(`/api/recipes/${id}/reviews`, review, config);
      dispatch({
        type: RECIPE_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: RECIPE_CREATE_REVIEW_FAIL,
        payload: error.response?.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
