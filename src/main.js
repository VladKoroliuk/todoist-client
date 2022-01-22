import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Vuesax from "vuesax/dist/vuesax.common.js";
import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.css";
import "fontisto/css/fontisto/fontisto.css";
import "./assets/index.css";
import "material-icons/iconfont/material-icons.css";
import SimpleVueValidation from "simple-vue-validator";
Vue.config.productionTip = false;
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "#db4c3f",
      success: "rgb(23, 201, 100)",
      danger: "rgb(242, 19, 93)",
      warning: "rgb(255, 130, 0)",
      dark: "rgb(36, 33, 69)",
    },
  },
});
Vue.use(SimpleVueValidation);
Vue.config.devtools = true;
new Vue({
  router,
  store,
  Vuesax,
  render: (h) => h(App),
}).$mount("#app");
