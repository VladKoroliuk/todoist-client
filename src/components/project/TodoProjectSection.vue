<template>
  <div class="section">
    <section-slot :filterFileds="['priority', 'text']">
      <template #header>
        <div class="flex gap-2 align-center">
          <h1 class="section__title">{{ projectData.name }}</h1>
        </div>
      </template>
      <template #body="slotProps">
        <todo-list
          :tasks="getByProject(projectData._id)"
          :filter="slotProps.filter"
        >
          <template #footer>
            <todo-add-collapse :project="projectData._id"></todo-add-collapse>
          </template>
        </todo-list>
        <todo-create-project-section
          :projectID="projectData._id"
        ></todo-create-project-section>
        <todo-list
          v-for="section in getProjectSections(projectData._id)"
          :key="section._id"
          :title="section.name"
          :changeable="true"
          @delete="deleteSection(section._id)"
          @rename="rename($event, section._id)"
          :tasks="
            getSectionsTasks.get(section._id) != undefined
              ? getSectionsTasks.get(section._id)
              : []
          "
        >
          <template #footer>
            <div class="ml-5">
              <todo-add-collapse
                :projectSection="section._id"
              ></todo-add-collapse>
            </div>
          </template>
        </todo-list>
      </template>
    </section-slot>
  </div>
</template>
<script>
import SectionSlot from "../TheSectionSlot.vue";
import TodoList from "../task/TodoList.vue";
import TodoCreateProjectSection from "./TodoCreateProjectSection.vue";
import TodoAddCollapse from "../task/TodoAddCollapse.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    SectionSlot,
    TodoList,
    TodoCreateProjectSection,
    TodoAddCollapse,
  },
  methods: {
    ...mapActions(["deleteSection", "renameSection"]),
    rename(name, id) {
      if (name == "") {
        return;
      }
      this.renameSection({ name, id });
    },
  },
  computed: {
    ...mapGetters([
      "getProjectData",
      "getByProject",
      "getProjectSections",
      "getSectionsTasks",
    ]),
    projectData() {
      return this.getProjectData(this.$route.params.projectID);
    },
  },
};
</script>
