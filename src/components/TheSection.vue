<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <component :is="section"></component>
  </div>
</template>
<script>
import TodaySection from "./TheSectionToday.vue";
import LabelSection from "./TheLabelSection.vue";
export default {
  data: () => ({
    section: "",
  }),
  components: {
    TodaySection,
    LabelSection,
  },
  methods: {
    handleSection(section) {
      switch (section) {
        case "today":
          this.section = "TodaySection";
          break;
        case "label":
          this.section = "LabelSection";
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
