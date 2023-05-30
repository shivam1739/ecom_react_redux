import { userRegister, userSignInApi } from "../utils/api";

export const userAuthRegister = async (userInfo) => {
  console.log(userInfo, "===========++++++++++=========");

  const response = await userRegister(userInfo);
  console.log(response, "response from services");
  if (response.error) {
    throw new Error(response.error);
  }
  return response;
};

export const userAuthSignIn = async (userInfo) => {
  const response = await userSignInApi(userInfo);
  // console.log(response, "fromService");
  response.roles = response?.data.Roles.map((item) => item.name);
  if (response.error) {
    throw new Error(response.error);
  }
  return response;
};
