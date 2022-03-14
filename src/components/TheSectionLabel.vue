<template>
  <div class="section">
    <section-slot :filterFileds="['text', 'priority']">
      <template v-slot:header>
        <div>
          <h1 class="section__title">
            {{ labelData.name }}
          </h1>
        </div>
      </template>
      <template v-slot:body="slotProps">
        <todo-list :tasks="tasks" :filter="slotProps.filter"></todo-list>
      </template>
    </section-slot>
  </div>
</template>
<script>
import SectionSlot from "./TheSectionSlot.vue";
import TodoList from "./task/TodoList.vue";
export default {
  components: {
    SectionSlot,
    TodoList,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasksByLabel(this.$route.params.labelID);
    },
    labelData() {
      return this.$store.getters.getLabelData(this.$route.params.labelID);
    },
  },
};
</script>
