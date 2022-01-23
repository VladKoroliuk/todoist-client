<template>
  <div>
    <component :is="section"></component>
  </div>
</template>
<script>
import TodaySection from "./TheSectionToday.vue";
export default {
  data: () => ({
    section: "",
  }),
  components: {
    TodaySection,
  },
  methods: {
    handleSection(section) {
      switch (section) {
        case "today":
          this.section = "TodaySection";
          break;

        default:
          this.section = "";
          break;
      }
    },
  },
  created() {
    this.handleSection(this.$route.params.section);
  },
  watch: {
    $route({ params }) {
      this.handleSection(params.section);
    },
  },
};
</script>
