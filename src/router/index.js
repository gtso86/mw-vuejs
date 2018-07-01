import Vue from "vue";
import Router from "vue-router";
import Page404 from "../app/units/shared/components/page-404.vue";

import { routes as Units } from "../app/units";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/content"
    },
    ...Units,
    {
      path: "*",
      component: Page404
    }
  ]
});
