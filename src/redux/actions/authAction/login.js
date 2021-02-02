import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: actionTypes.LOGIN, payload: response });
    } catch (error) {
      console.log(error);
    }
  };
};
