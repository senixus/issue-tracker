import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const deleteIssue = (issueId) => {
  return (dispatch) => {
    try {
      db.collection("issues").doc(issueId).delete();
      dispatch({ type: actionTypes.DELETE_ISSUE });
    } catch (error) {
      console.log(error);
    }
  };
};
