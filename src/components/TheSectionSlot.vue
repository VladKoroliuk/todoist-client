<template>
  <div class="section">
    <div>
      <router-view></router-view>
    </div>
    <header class="section__header">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <vs-select class="selectExample" label="Sort by" v-model="filterField">
          <vs-select-item :value="null" text="Without sorting" />
          <vs-select-item
            v-for="(field, index) in filterFileds"
            :key="index"
            :value="field"
            :text="field"
          />
        </vs-select>
      </div>
    </header>
    <div>
      <ul>
        <li v-for="task in sortedTasks" :key="task._id">
          <todo-task :taskData="task"></todo-task>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TodoTask from "./task/TodoTask.vue";
export default {
  components: {
    TodoTask,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    filterFileds: {
      type: Array,
      required: false,
      defult: [],
    },
  },
  data: () => ({
    filterField: null,
  }),
  computed: {
    sortedTasks() {
      const tasks = [...this.tasks];
      const filter = this.filterField;

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
};
</script>
