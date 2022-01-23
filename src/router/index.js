import Vue from "vue";
import VueRouter from "vue-router";
import userService from "../services/user.js";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import App from "../views/App.vue";

import Section from "../components/TheSection.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/app",
    name: "App",
    component: App,
    children: [
      {
        path: ":section",
        name: "Section",
        component: Section,
        // children: [
        //   {
        //     path: "task/:id",
        //     name: "TaskWindow",
        //     component: Section,
        //   },
        // ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const rootPath = to.path.slice(0, 4);
  if (rootPath == "/app" && !userService.isAutorized) next({ name: "Login" });
  if (rootPath != "/app" && userService.isAutorized) next({ name: "App" });
  else next();
});

export default router;
