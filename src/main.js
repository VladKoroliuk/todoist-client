import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.css";
import "./assets/index.css";
Vue.config.productionTip = false;
Vue.use(Vuesax, {
  colors: {
    primary: "#5b3cc4",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)",
  },
});

new Vue({
  router,
  store,
  Vuesax,
  render: (h) => h(App),
}).$mount("#app");
