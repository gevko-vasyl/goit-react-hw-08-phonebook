import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { isAuthorized } from "../redux/auth/authSelectors";

export function PublicRoute({ component: Component }) {
  const isAuth = useSelector(isAuthorized);
  return <>{isAuth ? <Navigate to="/contacts" /> : <Component />}</>;
}
