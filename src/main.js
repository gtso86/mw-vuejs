import Vue from "vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { bootstrap } from "./app/infra";

Vue.config.productionTip = false;

// bootstrap app
bootstrap({ Vue, router, store }).$mount("#app");
