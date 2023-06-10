import { Navigate, Outlet } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { isLogin } from "./store/slices/userSlice";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const isLogin = localStorage.getItem('token')

  if (!isLogin) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet/>;
};