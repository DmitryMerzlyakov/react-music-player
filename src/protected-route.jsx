import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/playlist/mymusic", isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};