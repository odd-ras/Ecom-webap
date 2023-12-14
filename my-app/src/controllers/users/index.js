import axios from "axios";

const baseUrl = "http://localhost:3001/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error({ error: error.message });
  }
};

export const addUser = async (userObject) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/users",
      userObject
    );
    return response.data;
  } catch (error) {
    console.error({ error: error.message });
  }
};
