<template>
  <ul>
    <li v-for="task in tasks" :key="task._id">
      <todo-task :taskData="task"></todo-task>
    </li>
  </ul>
</template>
<script>
import TodoTask from "./TodoTask.vue";
export default {
  components: {
    TodoTask,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
