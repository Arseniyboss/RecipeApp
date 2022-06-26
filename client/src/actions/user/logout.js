import { USER_LOGOUT } from "../../constants/user/login";
// import { USER_DETAILS_RESET } from "../../constants/user/details";

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  //   dispatch({ type: USER_DETAILS_RESET });
  document.location.href = "/login";
};
