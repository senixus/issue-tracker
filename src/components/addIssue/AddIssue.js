import React, { useState } from "react";
import { addIssue } from "../../redux/actions/issuesAction/addIssue";
import "./addIssue.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddIssue = () => {
  const [issue, setIssue] = useState({
    subject: "",
    severity: "low",
    description: "",
  });
  const dispatch = useDispatch();
  const addAnIssue = (user, subject, severity, description, status) =>
    dispatch(addIssue(user, subject, severity, description, status));

  const user = useSelector((state) => state.auth.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssue({ ...issue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addAnIssue(
      user.email,
      issue.subject,
      issue.severity,
      issue.description,
      "open"
    );

    setIssue({ subject: "", severity: "", description: "" });
  };

  return (
    <main className="add-issue">
      {user ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group__label">
              <label htmlFor="subject">Subject</label>
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={issue.subject}
              className="form-group__control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="form-group__label">
              <label htmlFor="severity">Severity</label>
            </div>
            <select
              className="form-group__control"
              value={issue.severity}
              onChange={handleChange}
              name="severity"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <div className="form-group__label">
              <label htmlFor="description">Description</label>
            </div>
            <textarea
              placeholder="Issue"
              value={issue.description}
              className="form-group__control"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="form-btn" type="submit">
              Create Issue
            </button>
          </div>
        </form>
      ) : (
        <p style={{ textAlign: "center", margin: "5rem 0" }}>
          You must <Link to="/login">login</Link> to create an issue
        </p>
      )}
    </main>
  );
};

export default AddIssue;
