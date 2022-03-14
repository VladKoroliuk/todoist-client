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
    filter: {
      required: false,
    },
  },
  watch: {
    tasks(newList) {
      this.tasksTemp = newList;
    },
  },
  methods: {
    sortTasks(tasks, filter) {
      if (filter == null) {
        return tasks;
      }

      tasks.sort((a, b) => {
        if (typeof a[filter] != typeof b[filter]) {
          return 0;
        }

        switch (typeof a[filter]) {
          case "number":
            return b[filter] - a[filter];
          case "string":
            if (a[filter] < b[filter]) {
              return -1;
            }
            if (a[filter] > b[filter]) {
              return 1;
            }
            return;
          default:
            return 0;
        }
      });

      return tasks;
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
        return this.sortTasks(getSubsequence(this.tasksTemp), this.filter);
      },
      set(newList) {
        this.tasksTemp = setSubsequence(newList);
      },
    },
  },
};
</script>
