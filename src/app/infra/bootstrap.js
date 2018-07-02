import plugins from "./plugins";
import Shell from "../units/shell.vue";

const bootstrap = ({ Vue, router, store }) => {
  // install internal plugins
  plugins.forEach(plugin => {
    plugin({ Vue, Shell, router, store });
  });

  // generate app/root instance
  return new Vue({
    router,
    store,
    ...Shell
  });
};

export default bootstrap;
