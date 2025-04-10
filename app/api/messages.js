import client from "./client";

import authStorage from "../auth/storage"; // Ensure this is your configured authStorage

// Ensure this is your configured apiClient with the transform

const send = async (message, listingId) => {
  const authToken = await authStorage.getToken();
  return client.post(
    "/messages",
    { message, listingId },
    { headers: { "x-auth-token": authToken } }
  );
};

export default {
  send,
};
