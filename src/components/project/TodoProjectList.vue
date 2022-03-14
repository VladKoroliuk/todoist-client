<template>
  <div>
    <ul>
      <li v-for="project in projects" :key="project._id">
        <todo-project-list-item :project="project"></todo-project-list-item>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TodoProjectListItem from "./TodoProjectListItem.vue";
export default {
  components: {
    TodoProjectListItem,
  },
  computed: mapState({
    projects: (state) => state.project.projects,
  }),
};
</script>
