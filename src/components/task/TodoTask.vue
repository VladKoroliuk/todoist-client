<template>
  <div>
    <component
      :is="activeComponent"
      :taskData="taskData"
      @edit="activeComponent = 'TodoChange'"
      @cancelEdit="activeComponent = 'TodoView'"
    ></component>
  </div>
</template>
<script>
import TodoChange from "./TodoChange.vue";
import TodoView from "./TodoView.vue";
export default {
  data: () => ({
    activeComponent: "TodoView",
  }),
  components: {
    TodoChange,
    TodoView,
  },
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
};
</script>
