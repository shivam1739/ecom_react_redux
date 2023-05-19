import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../constants/Category.constants";

export const getCategoryRequest = () => {
  return {
    type: GET_CATEGORY_REQUEST,
  };
};

export const getCategorySuccess = (categoriesData) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: categoriesData,
  };
};

export const getCategoryFail = (error) => {
  return {
    type: GET_CATEGORY_FAIL,
    payload: error,
  };
};
