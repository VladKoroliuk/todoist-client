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
        <vs-select
          class="selectExample"
          label="Filter by"
          v-model="filterField"
        >
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
        <li v-for="task in tasks" :key="task._id">
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
};
</script>
