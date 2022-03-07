<template>
  <ul>
    <draggable
      handle=".task__menu-handler"
      ghost-class="task-ghost"
      :animation="300"
      v-model="taskList"
    >
      <transition-group type="transition" name="flip-list">
        <li v-for="task in taskList" :key="task._id">
          <todo-task :taskData="task"></todo-task>
        </li>
      </transition-group>
    </draggable>
  </ul>
</template>
<script>
import TodoTask from "./TodoTask.vue";
import draggable from "vuedraggable";
import {
  setSubsequence,
  getSubsequence,
} from "../../services/taskSubsequence.js";

export default {
  components: {
    TodoTask,
    draggable,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  watch: {
    tasks(newList) {
      this.tasksTemp = newList;
    },
  },
  data() {
    return {
      tasksTemp: getSubsequence(this.tasks),
    };
  },
  computed: {
    taskList: {
      get() {
        return getSubsequence(this.tasksTemp);
      },
      set(newList) {
        this.tasksTemp = setSubsequence(newList);
      },
    },
  },
};
</script>
