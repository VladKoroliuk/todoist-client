import Vue from "vue";
import VueRouter from "vue-router";
import userService from "../services/user.js";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import App from "../views/App.vue";

import Section from "../components/TheSection.vue";
import TaskWindow from "../components/TheTaskWindow.vue";

import TodoComments from "../components/task/TodoComments.vue";
import TodoSub from "../components/task/TodoSubTasks.vue";
import TodoLabels from "../components/task/TodoLabels.vue";

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
        children: [
          {
            path: "task/:id/",
            name: "TaskWindow",
            component: TaskWindow,
            children: [
              {
                path: "subtasks",
                name: "TodoSub",
                component: TodoSub,
              },
              {
                path: "comments",
                name: "TodoComments",
                component: TodoComments,
              },
              {
                path: "labels",
                name: "TodoLabels",
                component: TodoLabels,
              },
            ],
          },
        ],
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
