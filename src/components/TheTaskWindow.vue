<template>
  <div>
    <vs-popup :active.sync="active" title="">
      <div class="task-menu">
        <header>
          <div class="task-menu__checkbox-block">
            <div class="checkbox">
              <svg class="checkbox-svg">
                <path
                  d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                ></path>
              </svg>
            </div>
            <div>
              <span
                ><strong class="task-name">{{ taskData.text }}</strong></span
              >
              <div>{{ taskData.description }}</div>
            </div>
          </div>
          <div class="header-content"></div>
        </header>
      </div>
    </vs-popup>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: true,
  }),
  watch: {
    active(newValue) {
      if (!newValue) {
        this.$router.go(-1);
      }
    },
  },
  computed: {
    taskData() {
      return this.$store.getters.taskData(this.$route.params.id);
    },
  },
};
</script>
<style scoped lang="scss">
.task-menu {
  &__checkbox-block {
    display: flex;
    gap: 10px;
  }
}
</style>
