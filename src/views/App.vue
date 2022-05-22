<template>
  <div class="App">
    <div class="wrap">
      <app-header @toggleMenu="toggleMenu" :user="userData"></app-header>
      <main class="main">
        <app-navigation :isOpen="menu"></app-navigation>
        <content class="main-content">
          <div class="main-content__block">
            <router-view></router-view>
          </div>
        </content>
      </main>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/TheHeader.vue";
import AppNavigation from "../components/TheNavigation.vue";
import userService from "../services/user.js";
import { subscribeHotKey, DEFAULT_KEYS } from "../services/hotKeys.js";
export default {
  components: {
    AppHeader,
    AppNavigation,
  },
  data: () => ({
    menu: true,
  }),
  computed: {
    userData() {
      return userService.getData;
    },
  },
  provide: {
    userData: userService.getData,
    avatarURL: userService.avatar,
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
  created() {
    this.$store.dispatch("loadTodos");
    this.$store.dispatch("loadLabels");
    this.$store.dispatch("loadProjects");

    if (this.$route.name == "App") {
      this.$router.push({ name: "Today" });
    }

    subscribeHotKey(DEFAULT_KEYS.MENU, this.toggleMenu);
  },
};
</script>
