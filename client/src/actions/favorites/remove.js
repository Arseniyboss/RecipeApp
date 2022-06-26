import axios from "axios";
import {
  REMOVE_FAVORITE_RECIPE_RESET,
  REMOVE_FAVORITE_RECIPE_SUCCESS,
  REMOVE_FAVORITE_RECIPE_FAIL,
} from "../../constants/favorites/remove";

export const removeRecipe = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_FAVORITE_RECIPE_RESET,
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
    const { data } = await axios.delete(
      `/api/users/${userInfo._id}/recipe/${id}`,
      config
    );
    dispatch({
      type: REMOVE_FAVORITE_RECIPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FAVORITE_RECIPE_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
