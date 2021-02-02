import React, { useState } from "react";
import "./auth.scss";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction/login";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const loginUser = (email, password) => dispatch(login(email, password));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(user.email, user.password);
    setUser({ email: "", password: "" });
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group-__label">
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-group__control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <div className="form-group-__label">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            className="form-group__control"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button className="form-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
