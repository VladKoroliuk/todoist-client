<template>
  <div class="section">
    <section-slot
      :tasks="$store.getters.todayTasks"
      :filterFileds="['priotity', 'term', 'text']"
    >
      <template v-slot:header>
        <div class="flex gap-2 align-center">
          <h1 class="section__title">Today tasks</h1>
          <small class="section__date">{{ $moment().format("MMM Do") }}</small>
        </div>
      </template>
    </section-slot>
  </div>
</template>
<script>
import SectionSlot from "./TheSectionSlot.vue";
export default {
  components: {
    SectionSlot,
  },
};
</script>
