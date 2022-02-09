<template>
  <div class="sub-tasks">
    <div class="sub-tasks__container">
      <todo-list :tasks="tasks"></todo-list>
    </div>
    <div>
      <todo-add-collapse :parentID="taskData._id"></todo-add-collapse>
    </div>
  </div>
</template>
<script>
import TodoAddCollapse from "./TodoAddCollapse.vue";
import TodoList from "./TodoList.vue";
export default {
  components: {
    TodoAddCollapse,
    TodoList,
  },
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tasks() {
      return this.$store.getters.subTasks(this.taskData._id);
    },
  },
};
</script>
