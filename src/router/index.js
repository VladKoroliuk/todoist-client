import Vue from "vue";
import VueRouter from "vue-router";
import userService from "../services/user.js";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import App from "../views/App.vue";

import TaskWindow from "../components/TheTaskWindow.vue";
import TodoComments from "../components/task/TodoComments.vue";
import TodoSub from "../components/task/TodoSubTasks.vue";
import TodoLabels from "../components/task/TodoLabels.vue";

import TheSectionToday from "../components/TheSectionToday.vue";
import TheSectionLabel from "../components/TheSectionLabel.vue";
import TheSectionInbox from "../components/TheSectionInbox.vue";
import TheSectionUpcoming from "../components/TheSectionUpcoming.vue";

Vue.use(VueRouter);

const taskMenuRoutes = {
  path: "task/:id/",
  component: TaskWindow,
  children: [
    {
      path: "subtasks",
      component: TodoSub,
    },
    {
      path: "comments",
      component: TodoComments,
    },
    {
      path: "labels",
      component: TodoLabels,
    },
  ],
};

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
        path: "today",
        name: "Today",
        component: TheSectionToday,
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
      {
        path: "inbox",
        name: "Inbox",
        component: TheSectionInbox,
        children: [taskMenuRoutes],
      },
      {
        path: "upcoming",
        name: "Upcoming",
        component: TheSectionUpcoming,
        children: [taskMenuRoutes],
      },
      {
        path: "label/:labelID",
        name: "Label",
        component: TheSectionLabel,
        children: [taskMenuRoutes],
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
