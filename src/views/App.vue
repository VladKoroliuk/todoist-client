<template>
  <div class="App">
    <div class="wrap">
      <app-header @toggleMenu="menu = !menu" :user="userData"></app-header>
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
  created() {
    this.$store.dispatch("loadTodos");
    this.$store.dispatch("loadLabels");

    if (this.$route.name == "App") {
      this.$router.push({ name: "Today" });
    }
  },
};
</script>
