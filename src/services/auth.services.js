import { userRegister } from "../utils/api";

export const userAuthRegister = async (userInfo) => {
  try {
    console.log(userInfo, "===========++++++++++=========");

    const response = await userRegister(userInfo);
    console.log(response, "response from services");
    return response;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
