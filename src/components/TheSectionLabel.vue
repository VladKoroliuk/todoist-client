<template>
  <div class="section">
    <section-slot :tasks="tasks" :filterFileds="['text', 'priority']">
      <template v-slot:header>
        <div>
          <h1 class="section__title">
            {{ labelData.name }}
          </h1>
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
