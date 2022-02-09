import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMoment from "vue-moment";
import Vuesax from "vuesax/dist/vuesax.common.js";
import SimpleVueValidation from "simple-vue-validator";
import theme from "./vs-theme.js";
import "./assets/scss/index.scss";
import "vuesax/dist/vuesax.css";
import "./plugins/axios";
import "boxicons/css/boxicons.css";
import "fontisto/css/fontisto/fontisto.css";
import "material-icons/iconfont/material-icons.css";

Vue.use(Vuesax, theme);
Vue.use(SimpleVueValidation);
Vue.use(VueMoment);
Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuesax,
  render: (h) => h(App),
}).$mount("#app");
