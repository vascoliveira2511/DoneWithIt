import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://10.110.34.75:9000/api",
    timeout: 5000,
  },
  staging: {
    apiUrl: "http://10.110.34.75:9000/api",
    timeout: 5000,
  },
  prod: {
    apiUrl: "http://10.110.34.75:9000/api",
    timeout: 5000,
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.expoConfig.releaseChannel === "staging")
    return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
