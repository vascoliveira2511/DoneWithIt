import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expireTime = 5; // minutes

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.error("Error storing data", error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const stored = moment(item.timestamp);
  const isExpired = now.diff(stored, "minutes") > expireTime;
  return isExpired;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.error("Error retrieving data", error);
  }
};

export default {
  store,
  get,
};
