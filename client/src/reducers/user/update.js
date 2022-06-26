import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../../constants/user/update";

const initialState = {
  loading: true,
};

export const userUpdateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_UPDATE_REQUEST:
      return initialState;
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
