<template>
  <div class="section">
    <section-slot>
      <template v-slot:header>
        <div>
          <h1 class="section__title">Label</h1>
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
