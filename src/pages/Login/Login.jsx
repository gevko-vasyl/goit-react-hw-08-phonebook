import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { getIsRefreshing } from "../../redux/auth/authSelectors";

const LoginView = () => {
  const isReloading = useSelector(getIsRefreshing);
  return (
    !isReloading && (
      <>
        <LoginForm />
      </>
    )
  );
};
export default LoginView;
