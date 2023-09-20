import axios from "axios";
import cookie from "js-cookie";

import { ENV } from "~/common/constants/constants";

const getHeaders = () => ({
  "Content-Type": "application/json",
});

export const axiosClassic = axios.create({
  baseURL: ENV.API_URL,
  headers: getHeaders(),
});

const instance = axios.create({
  baseURL: ENV.API_URL,
  headers: getHeaders(),
});

instance.interceptors.request.use((config) => {
  const accessToken = cookie.get("accessToken");

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;
