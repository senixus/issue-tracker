import React, { useEffect } from "react";
import "./issues.scss";
import { useDispatch, useSelector } from "react-redux";
import { getIssues } from "../../redux/actions/issuesAction/getIssues";
import { Link } from "react-router-dom";
import { updateIssue } from "../../redux/actions/issuesAction/updateIssue";
import { deleteIssue } from "../../redux/actions/issuesAction/deleteIssue";

const Issues = () => {
  const issues = useSelector((state) => state.issues.issues);
  const dispatch = useDispatch();
  const getAllIssues = () => dispatch(getIssues());
  const updateSingleIssue = (issueId, issue) =>
    dispatch(updateIssue(issueId, issue));
  const deleteSingleIssue = (issueId) => dispatch(deleteIssue(issueId));

  useEffect(() => {
    getAllIssues();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Subject</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Status</th>
            <th>Close</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {issues &&
            issues.map((issue, index) => (
              <tr key={issue.id}>
                <td>{index + 1}</td>
                <td>{issue.user}</td>
                <td>{issue.subject}</td>
                <td>{issue.severity}</td>
                <td>
                  {issue.description.length >= 20
                    ? issue.description.substr(0, 50) + "..."
                    : issue.description}
                </td>
                <td>{issue.status}</td>
                <td>
                  <button
                    className="close-btn"
                    onClick={() => updateSingleIssue(issue.id, "closed")}
                  >
                    Close
                  </button>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteSingleIssue(issue.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/issue-details/${issue.id}`}>Details</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Issues;
