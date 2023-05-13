import { userRegister } from "../utils/api";

export const userAuthRegister = async (userInfo) => {
  try {
    console.log(userInfo, "===========++++++++++=========");
    const response = await userRegister(userInfo);
    console.log(response, "response from services");
  } catch (err) {
    console.log(err);
  }
};
