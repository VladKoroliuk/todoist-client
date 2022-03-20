<template>
  <div class="add-task-collapse">
    <div class="add-task-button" @click="isOpen = true" v-show="!isOpen">
      <div class="add-task-button__ico">
        <svg width="13" height="13">
          <path
            d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="add-task-button__text">{{ $t("addTask") }}</div>
    </div>
    <vs-button
      color="dark"
      type="border"
      @click="isOpen = false"
      v-show="isOpen"
      size="small"
      >{{ $t("close") }}</vs-button
    >
    <div v-if="isOpen">
      <todo-add
        :parentID="parentID"
        :label="label"
        :project="project"
        :projectSection="projectSection"
        @close="isOpen = false"
      ></todo-add>
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
    label: {
      type: String,
      required: false,
      default: null,
    },
    project: {
      type: String,
      required: false,
      default: null,
    },
    projectSection: {
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
