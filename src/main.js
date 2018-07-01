import Vue from "vue";
import App from "./app/units/shell.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ...App
}).$mount("#app");
