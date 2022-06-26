import axios from "axios";
import {
  ADD_FAVORITE_RECIPE_REQUEST,
  ADD_FAVORITE_RECIPE_SUCCESS,
  ADD_FAVORITE_RECIPE_FAIL,
} from "../../constants/favorites/add";

export const addRecipe = (item) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_FAVORITE_RECIPE_REQUEST,
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
    const { data } = await axios.post(
      `/api/users/${userInfo._id}/recipe`,
      item,
      config
    );
    dispatch({
      type: ADD_FAVORITE_RECIPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_FAVORITE_RECIPE_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
