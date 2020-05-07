import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { loadingBarReducer } from "react-redux-loading-bar";
import {
  staticContentReducer,
  modalReducer,
  orgbookReducer,
} from "@/reducers";
import networkReducer from "./networkReducer";
import * as reducerTypes from "@/constants/reducerTypes";
import authenticationReducer from "@/reducers/authenticationReducer";

// Function to create a reusable reducer (used in src/reducers/rootReducer)
export const createReducer = (reducer, name) => (state, action) => {
  if (name !== action.name && state !== undefined) {
    return state;
  }
  return reducer(state, action);
};

export const reducerObject = {
  form: formReducer,
  loadingBar: loadingBarReducer,
  ...staticContentReducer,
  ...modalReducer,
  ...orgbookReducer,
  [reducerTypes.AUTHENTICATION]: authenticationReducer,
  [reducerTypes.AUTHENTICATE_USER]: createReducer(networkReducer, reducerTypes.AUTHENTICATE_USER),
  [reducerTypes.GET_USER_INFO]: createReducer(networkReducer, reducerTypes.GET_USER_INFO),
};

export const rootReducer = combineReducers(reducerObject);
