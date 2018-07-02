import { http, setToken } from "./client";

export default ({ Vue, store }) => {
  Object.defineProperty(Vue.prototype, "$http", {
    get: () => http
  });

  store.watch(
    () => store.state.auth.token,
    token => {
      setToken(token);
    }
  );
};
