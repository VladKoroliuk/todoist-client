<template>
  <div class="App">
    <div>
      <vs-popup :active.sync="popup" title="">
        <component :is="popupComponent"></component>
      </vs-popup>
    </div>
    <div class="wrap">
      <app-header
        @toggleMenu="menu = !menu"
        @openModal="openModal"
        :user="userData"
      ></app-header>
      <main class="main">
        <app-navigation :opened="menu"></app-navigation>
        <content class="main-content"></content>
      </main>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/TheHeader.vue";
import AppNavigation from "../components/TheNavigation.vue";
import TodoAddDialog from "../components/TodoAddDialog.vue";
import userService from "../services/user.js";
export default {
  components: {
    AppHeader,
    AppNavigation,
    TodoAddDialog,
  },
  data: () => ({
    menu: true,
    popup: false,
    popupComponent: "TodoAddDialog",
  }),
  computed: {
    userData() {
      return userService.getData;
    },
  },
  methods: {
    openModal() {
      this.popup = true;
    },
  },
  mounted() {
    this.$store.dispatch("loadTodos");
  },
};
</script>
<style src="../assets/scss/app.scss" lang="scss"></style>
