<template>
  <div class="add-task-collapse">
    <vs-button
      color="primary"
      type="border"
      size="small"
      @click="isOpen = true"
      v-show="!isOpen"
      >Add task</vs-button
    >
    <vs-button
      color="dark"
      type="border"
      @click="isOpen = false"
      v-show="isOpen"
      size="small"
      >Close</vs-button
    >
    <div v-if="isOpen">
      <todo-add :parentID="parentID" @close="isOpen = false"></todo-add>
    </div>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd.vue";
export default {
  components: {
    TodoAdd,
  },
  props: {
    parentID: {
      type: String,
      required: false,
      default: null,
    },
  },
  data: () => ({
    isOpen: false,
  }),
};
</script>
