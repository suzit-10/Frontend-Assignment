import { server } from "../server/server";

export const login = async (data) => {
  try {
    const response = await server.post("/auth/login", data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
