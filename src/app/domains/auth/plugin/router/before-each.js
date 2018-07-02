import { get } from "lodash-es";
import ensureAuth from "./ensure-auth";

const needAuth = to => get(to, ["meta", "needAuth"], true);

const beforeEach = (router, { store }) => {
  router.beforeEach((to, from, next) => {
    if (needAuth(to)) {
      ensureAuth(store, to, from, next);
      return;
    }
    next();
  });
};

export default beforeEach;
