import axios from "axios";
import env from "../../env";

const factory = () =>
  axios.create({
    baseURL: env.VUE_APP_API_BASE
  });

const http = factory();

// Helper method to set the header with the token
const setToken = (token, instance) => {
  (instance || http).defaults.headers.common.Authorization = `Bearer ${token}`;
};

export { http, factory, setToken };
