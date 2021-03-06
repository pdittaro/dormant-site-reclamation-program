import * as authenticationReducer from "../reducers/authenticationReducer";

export const {
  isAuthenticated,
  getUserAccessData,
  getUserInfo,
  getKeycloak,
  getRedirect,
  isProponent,
} = authenticationReducer;
