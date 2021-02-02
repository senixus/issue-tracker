import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIssueDetails } from "../../redux/actions/issuesAction/issueDetails";
import "./issueDetails.scss";

const IssueDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const issueDetails = (issueId) => dispatch(getIssueDetails(issueId));
  const issue = useSelector((state) => state.issues.issue);

  useEffect(() => {
    issueDetails(id);
  }, []);

  return (
    <main className="card-details">
      <div className="card">
        <div className="card-header">
          <p className="subject">{issue.subject}</p>
          <span className="status">{issue.status}</span>
        </div>
        <div className="card-body">
          <div>
            <p className="severity">{issue.severity}</p>
          </div>
          <div>
            <p className="description">{issue.description}</p>
          </div>
          <div>
            <p className="user">{issue.user}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IssueDetails;
