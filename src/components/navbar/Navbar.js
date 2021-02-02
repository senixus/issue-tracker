import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { logout } from "../../redux/actions/authAction/logout";
import { currentUser } from "../../redux/actions/authAction/currentUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const logoutUser = () => dispatch(logout());
  const isCurrentUser = () => dispatch(currentUser());

  useEffect(() => {
    isCurrentUser();
  }, [isCurrentUser, user]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p className="navbar-logo__item">
          <Link to="/" className="navbar-logo__link">
            Issue Tracker
          </Link>
        </p>
      </div>
      <ul className="navbar-nav">
        <li className="navbar-nav__item">
          <Link to="/" className="navbar-nav__link">
            Home
          </Link>
        </li>
        <li className="navbar-nav__item">
          <Link to="/issues" className="navbar-nav__link">
            Issues
          </Link>
        </li>
        <li className="navbar-nav__item">
          <Link to="/add-issue" className="navbar-nav__link">
            Add Issue
          </Link>
        </li>

        {user ? (
          <li className="navbar-nav__item">
            <Link
              to="/"
              className="navbar-nav__link"
              onClick={() => logoutUser()}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li className="navbar-nav__item">
            <Link
              to="/register"
              className="navbar-nav__link"
              style={{ marginRight: "1rem" }}
            >
              Register
            </Link>

            <Link to="/login" className="navbar-nav__link">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
