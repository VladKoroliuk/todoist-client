<template>
  <div class="section">
    <section-slot
      :tasks="$store.getters.inboxTasks"
      :filterFileds="['priority', 'text']"
    >
      <template v-slot:header>
        <div class="flex gap-2 align-center">
          <h1 class="section__title">Inbox tasks</h1>
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
