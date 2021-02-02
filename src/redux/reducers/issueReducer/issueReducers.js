import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const issueReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ISSUES:
      return {
        ...state,
        issues: action.payload,
      };
    case actionTypes.UPDATE_ISSUE:
      return {
        ...state,
        issue: action.payload,
      };

    case actionTypes.GET_ISSUE_DETAILS:
      return {
        ...state,
        issue: action.payload,
      };
    default:
      return state;
  }
};
