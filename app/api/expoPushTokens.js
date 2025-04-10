import client from "./client";
import authStorage from "../auth/storage";

const register = async (pushToken) => {
  const authToken = await authStorage.getToken();
  return client.post(
    "/expoPushTokens",
    { token: pushToken },
    { headers: { "x-auth-token": authToken } }
  );
};

export default {
  register,
};
