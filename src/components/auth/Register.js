import React, { useState } from "react";
import "./auth.scss";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAction/register";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const registerUser = (email, password) => dispatch(register(email, password));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(user.email, user.password);
    setUser({ email: "", password: "" });
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group__label">
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-group__control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="form-group__label">
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            name="password"
            className="form-group__control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="form-btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </main>
  );
};

export default Register;
