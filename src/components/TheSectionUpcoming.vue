<template>
  <div class="section">
    <section-slot :filterFileds="['priority', 'text']">
      <template v-slot:header>
        <div class="flex gap-2 align-center">
          <h1 class="section__title">
            {{ $t("sectionHeaders.upcomingTasks") }}
          </h1>
        </div>
      </template>
      <template v-slot:body="slotProps">
        <todo-list
          :tasks="$store.getters.upcomingTasks"
          :filter="slotProps.filter"
        ></todo-list>
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
};
</script>
