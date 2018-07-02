import { http } from "./client";

export default ({ Vue }) => {
  Object.defineProperty(Vue.prototype, "$http", {
    get: () => http
  });
};
