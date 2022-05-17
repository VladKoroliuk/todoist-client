<template>
  <nav class="navigation" :class="{ navigation__closed: !isOpen }">
    <vs-popup :active.sync="modals.createLabel" title="">
      <todo-create-label
        @close="toggleModal('createLabel', false)"
      ></todo-create-label>
    </vs-popup>
    <vs-popup :active.sync="modals.createProject" title="">
      <todo-create-project
        @close="toggleModal('createProject', false)"
      ></todo-create-project>
    </vs-popup>
    <div>
      <sections-list></sections-list>
      <navigation-collapse-list
        @openModal="toggleModal"
      ></navigation-collapse-list>
    </div>
  </nav>
</template>
<script>
import TodoCreateLabel from "./label/TodoCreateLabel.vue";
import TodoCreateProject from "./project/TodoCreateProject.vue";
import SectionsList from "./navigation/SectionsList.vue";
import NavigationCollapseList from "./navigation/NavigatonCollapseList.vue";
export default {
  name: "AppNavigation",
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    TodoCreateLabel,
    TodoCreateProject,
    SectionsList,
    NavigationCollapseList,
  },
  methods: {
    toggleModal(modalName, isShow = true) {
      this.modals[modalName] = isShow;
    },
  },
  data: () => ({
    modals: {
      createLabel: false,
      createProject: false,
    },
  }),
};
</script>
