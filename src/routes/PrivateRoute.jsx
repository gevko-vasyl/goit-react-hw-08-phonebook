import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { isAuthorized } from "../redux/auth/authSelectors";

export function PrivateRoute({ component: Component }) {
  const isAuth = useSelector(isAuthorized);
  return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
}
