<template>
  <div>
    <vs-popup :active.sync="active" title="">
      <div class="task-menu">
        <header>
          <div class="task-menu__checkbox-block">
            <div
              class="checkbox"
              @click="$store.dispatch('performTask', taskData._id)"
            >
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
          <div class="header-content ml-7">
            <div
              class="task-deadline mt-2"
              v-if="$moment().diff(this.taskData.term, 'days') >= 1"
            >
              <svg
                data-svgs-path="sm1/calendar_small.svg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="red"
                  fill-rule="nonzero"
                  d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
                ></path>
              </svg>
              <span style="color: red">
                {{ $moment(taskData.term).fromNow() }}</span
              >
            </div>
            <div class="mt-4">
              <todo-label-chip
                v-for="label in labels"
                :key="label._id"
                :data="label"
              ></todo-label-chip>
            </div>
          </div>
        </header>
        <main class="mt-9">
          <div class="task-menu__main">
            <nav class="task-navigation">
              <router-link
                class="task-navigation__item"
                active-class="task-navigation__item_active"
                :to="{ name: 'TodoSub' }"
                >Sub tasks</router-link
              >
              <router-link
                class="task-navigation__item"
                active-class="task-navigation__item_active"
                :to="{ name: 'TodoComments' }"
                >Comments</router-link
              >
              <router-link
                class="task-navigation__item"
                active-class="task-navigation__item_active"
                :to="{ name: 'TodoLabels' }"
                >Labels</router-link
              >
            </nav>
            <div class="task-menu__content">
              <router-view :taskData="taskData"></router-view>
            </div>
          </div>
        </main>
      </div>
    </vs-popup>
  </div>
</template>
<script>
import TodoLabelChip from "./label/TodoLabelChip.vue";
export default {
  data: () => ({
    active: true,
  }),
  components: {
    TodoLabelChip,
  },
  watch: {
    active(newValue) {
      if (!newValue) {
        this.$router.push({
          name: "Section",
          params: {
            section: this.$route.params.section,
          },
        });
      }
    },
  },
  computed: {
    taskData() {
      return this.$store.getters.taskData(this.$route.params.id);
    },
    labels() {
      return this.$store.getters.getTaskLabels(this.taskData.labels);
    },
  },
  mounted() {
    if (this.$route.name == "TaskWindow") {
      this.$router.push({ name: "TodoSub" });
    }
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
