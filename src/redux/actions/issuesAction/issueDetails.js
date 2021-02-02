import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getIssueDetails = (issueId) => {
  return (dispatch) => {
    try {
      db.collection("issues")
        .doc(issueId)
        .get()
        .then((issue) => {
          dispatch({
            type: actionTypes.GET_ISSUE_DETAILS,
            payload: issue.data(),
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
