import { Switch, Route } from "react-router-dom";
import AddIssue from "../addIssue/AddIssue";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Navbar from "../navbar/Navbar";
import Issues from "../issues/Issues";
import IssueDetails from "../issueDetails/IssueDetails";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Issues} />
          <Route path="/add-issue" component={AddIssue} />
          <Route path="/issue-details/:id" component={IssueDetails} />
          <Route path="/issues" component={Issues} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
