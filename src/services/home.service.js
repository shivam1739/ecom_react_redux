import { getCategories } from "../utils/api";
export const loadCategories = async () => {
  const response = await getCategories();
  console.log(response, "===Response from getCategories");
  if (response.error) {
    throw new Error(response.error);
  }
  return response;
};
