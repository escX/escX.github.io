import Vue from "vue";
import App from "./App";
import VueInlineLoading from "vue-inline-loading";

Vue.config.productionTip = false;

Vue.use(VueInlineLoading);

new Vue({
  render: h => h(App)
}).$mount("#app");
