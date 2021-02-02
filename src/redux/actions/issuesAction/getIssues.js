import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getIssues = () => {
  return (dispatch) => {
    try {
      let issue;
      db.collection("issues")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          issue = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          dispatch({ type: actionTypes.GET_ISSUES, payload: issue });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
