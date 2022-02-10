<template>
  <div class="settings">
    <todo-secttings-navigation></todo-secttings-navigation>
    <div class="settings__content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TodoSecttingsNavigation from "../components/settings/TodoSettingsNavigation.vue";
export default {
  components: {
    TodoSecttingsNavigation,
  },
  created() {
    if (this.$route.name == "Settings") {
      this.$router.push({ name: "SettingsAccount" });
    }
  },
};
</script>
