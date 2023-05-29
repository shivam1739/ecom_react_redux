import axios from "axios";
import { BASE_URL } from "./assets";
const access_token = localStorage.getItem("x-access-token");
axios.defaults.headers.common["x-access-token"] = access_token;

export const userRegister = async (userInfo, userType) => {
  console.log(userInfo, ">..........................");
  try {
    const response = await axios.post(
      `${BASE_URL}/signup/${userType || "customer"}`,
      userInfo
    );
    console.log(response, "===========@@==========");
    return response.data;
  } catch (error) {
    console.log(error, "err form api");
    return { error: error.response.data };
  }
};

export const userSignInApi = async (userInfo) => {
  try {
    console.log(userInfo);
    const response = await axios.post(`${BASE_URL}/signin`, userInfo);
    console.log(response, "====response form signInscreen====");
    return response.data;
  } catch (err) {
    console.log(err.response.data.message, "==erro");
    throw new Error(err.response.data.message);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    console.log(response, "from api");
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};
