<template>
  <div class="section">
    <header class="section__header">
      <h1 class="section__title">Today tasks</h1>
    </header>
    <div>
      <ul>
        <li v-for="task in today" :key="task._id">
          <todo-task :taskData="task"></todo-task>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TodoTask from "./TodoTask.vue";
export default {
  components: {
    TodoTask,
  },
  computed: {
    today() {
      return this.$store.getters.todayTasks;
    },
  },
};
</script>
