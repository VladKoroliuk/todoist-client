<template>
  <div class="section">
    <section-slot :filterFileds="['text', 'priority']">
      <template #header>
        <div>
          <h1 class="section__title">
            {{ labelData.name }}
          </h1>
        </div>
      </template>
      <template #body="slotProps">
        <todo-list :tasks="getTasksByLabel(labelID)" :filter="slotProps.filter">
          <template #footer>
            <todo-add-collapse :label="labelData._id"></todo-add-collapse>
          </template>
        </todo-list>
      </template>
    </section-slot>
  </div>
</template>
<script>
import SectionSlot from "./TheSectionSlot.vue";
import TodoList from "./task/TodoList.vue";
import TodoAddCollapse from "./task/TodoAddCollapse.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SectionSlot,
    TodoList,
    TodoAddCollapse,
  },
  computed: {
    ...mapGetters(["getTasksByLabel", "getLabelData"]),
    labelID() {
      return this.$route.params.labelID;
    },
    labelData() {
      return this.getLabelData(this.labelID);
    },
  },
};
</script>
