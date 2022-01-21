<template>
  <div class="popup">
    <div class="popup__content">
      <todo-add></todo-add>
    </div>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd.vue";
export default {
  components: {
    TodoAdd,
  },
};
</script>
