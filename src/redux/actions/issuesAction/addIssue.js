import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";
import firebase from "../../../firebase/firebase";

export const addIssue = (user, subject, severity, description, status) => {
  return async (dispatch) => {
    try {
      const issue = await db.collection("issues").add({
        user,
        subject,
        severity,
        description,
        status,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      dispatch({ type: actionTypes.ADD_ISSUE, payload: issue });
    } catch (error) {
      console.log(error);
    }
  };
};
