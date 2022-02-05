import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMoment from "vue-moment";
import Vuesax from "vuesax/dist/vuesax.common.js";
import SimpleVueValidation from "simple-vue-validator";
import "./assets/scss/index.scss";
import "vuesax/dist/vuesax.css";
import "./plugins/axios";
import "boxicons/css/boxicons.css";
import "fontisto/css/fontisto/fontisto.css";
import "material-icons/iconfont/material-icons.css";

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
Vue.use(VueMoment);
Vue.config.devtools = true;

new Vue({
  router,
  store,
  Vuesax,
  render: (h) => h(App),
}).$mount("#app");
