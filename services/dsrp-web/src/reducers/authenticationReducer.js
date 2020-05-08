import * as ActionTypes from "../constants/actionTypes";
import { AUTHENTICATION } from "../constants/reducerTypes";
import * as route from "@/constants/routes";

/**
 * @file authenticationReducer.js
 * all data associated with a users record is handled within this reducer.
 */

const initialState = {
  isAuthenticated: false,
  userAccessData: [],
  userInfo: {},
  keycloak: {},
  redirect: false,
  isProponent: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload.userInfo,
        redirect: route.HOME.route,
      };
    case ActionTypes.STORE_KEYCLOAK_DATA:
      return {
        ...state,
        keycloak: action.payload.data,
      };
    case ActionTypes.STORE_USER_ACCESS_DATA:
      return {
        ...state,
        userAccessData: action.payload.roles,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userInfo: {},
        keycloak: {},
        redirect: route.HOME.route,
      };
    case ActionTypes.STORE_IS_PROPONENT:
      return {
        ...state,
        isProponent: action.payload.data,
      };
    default:
      return state;
  }
};

const authenticationReducerObject = {
  [AUTHENTICATION]: authenticationReducer,
};

export const isAuthenticated = (state) => state[AUTHENTICATION].isAuthenticated;
export const getUserAccessData = (state) => state[AUTHENTICATION].userAccessData;
export const getUserInfo = (state) => state[AUTHENTICATION].userInfo;
export const getKeycloak = (state) => state[AUTHENTICATION].keycloak;
export const getRedirect = (state) => state[AUTHENTICATION].redirect;
export const isProponent = (state) => state[AUTHENTICATION].isProponent;

export default authenticationReducerObject;
