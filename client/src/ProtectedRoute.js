import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const userLogin = useSelector((state) => state.user.userLogin);

  const { userInfo } = userLogin;

  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
