import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/auth/authOperations";
import { useSelector } from "react-redux";
import {
  isAuthorized,
  getIsRefreshing,
  getUserName,
} from "../../redux/auth/authSelectors";
import "./AppBar.scss";

const Appbar = () => {
  const isAuth = useSelector(isAuthorized);
  const username = useSelector(getUserName);
  const isReloading = useSelector(getIsRefreshing);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    !isReloading && (
      <div className="AppBar">
        {isAuth ? (
          <>
            <div className="navigationAuth">
              <NavLink className="navLink" to="/">
                Home
              </NavLink>
              <NavLink className="navLink" to="/contacts">
                Contacts
              </NavLink>
            </div>
            <div className="userDetails">
              <p>
                Welcome, <span>{username}</span>
              </p>
              <button
                className="LogoutBtn"
                type="button"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="navigation">
              <NavLink className="navLink Login" to="/login">
                Log in
              </NavLink>

              <NavLink className="navLink" to="/register">
                Sign up
              </NavLink>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Appbar;
