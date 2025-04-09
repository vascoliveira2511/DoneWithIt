import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.110.34.75:9000/api",
  timeout: 5000,
});

export default apiClient;
