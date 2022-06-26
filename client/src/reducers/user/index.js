import { combineReducers } from "redux";
import { userLoginReducer } from "./login";
import { userRegisterReducer } from "./register";
import { userDeleteReducer } from "./delete";
import { userDetailsReducer } from "./details";
import { userUpdateReducer } from "./update";
import { userVerifyEmailReducer } from "./verifyEmail";
import { userForgotPasswordReducer } from "./forgotPassword";
import { userResetPasswordReducer } from "./resetPassword";

export const userReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDelete: userDeleteReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userVerifyEmail: userVerifyEmailReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswordReducer,
});
