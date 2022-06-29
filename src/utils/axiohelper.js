import axios from "axios";
import history from "./history";

export const setAxiosConfig = () => {
  let baseURL = "url goes here";

  axios.defaults.baseURL = baseURL;
  axios.interceptors.response.use((response) => response, handleError);
};

export const setAuthToken = () => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.pmToken}`;
};

const handleError = (error) => {
  return { data: { sucess: false } };
};
