import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const updateIssue = (issueId, issue) => {
  return (dispatch) => {
    try {
      const update = db.collection("issues").doc(issueId).update({
        status: issue,
      });
      console.log(update);
      dispatch({ type: actionTypes.UPDATE_ISSUE, payload: issue });
    } catch (error) {
      console.log(error);
    }
  };
};
