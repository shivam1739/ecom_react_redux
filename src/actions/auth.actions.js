import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/Auth.constants";

export const userRegisterRequest = () => {
  return {
    type: USER_REGISTER_REQUEST,
  };
};

export const userRegisterSuccess = (response) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: response,
  };
};

export const userRegisterFail = (error) => {
  return {
    type: USER_REGISTER_FAIL,
    payload: error,
  };
};

export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const userLoginSuccess = (userInfo) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: userInfo,
  };
};

export const userLoginFail = (error) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: error,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
