import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../constants/Category.constants";

const initialState = {
  categories: null,
  loading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return { ...state, loading: true, error: null, message: null };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };

    case GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };
    default:
      return state;
  }
};
