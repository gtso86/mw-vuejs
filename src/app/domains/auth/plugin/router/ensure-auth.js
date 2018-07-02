import { http } from "../../../http";

const ensureAuth = (store, to, from, next) => {
  const onSuccess = () => {
    next();
  };
  const onError = () => {
    next("/auth/signin");
  };
  store
    .dispatch("auth/checkUserToken", http)
    .then(onSuccess)
    .catch(onError);
};

export default ensureAuth;
