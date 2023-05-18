import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/Auth.constants";

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true, error: null, message: null };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        userInfo: action.payload.data,
        loading: false,
        error: null,
      };
    case USER_REGISTER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null, message: action.payload };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        userInfo: action.payload.data,
        token: action.payload.token,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload, message: null };
    case USER_LOGOUT:
      return { ...state, userInfo: null, message: null, error: null };
    default:
      return state;
  }
};
