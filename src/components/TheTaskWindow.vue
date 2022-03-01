<template>
  <div>
    <vs-popup :active.sync="active" title="">
      <div class="task-menu">
        <header>
          <div class="task-menu__checkbox-block">
            <todo-check-box
              :priority="taskData.priority"
              @click="performTask"
            ></todo-check-box>
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
            <div class="w-24 mt-4 ml-7">
              <vs-input-number
                min="1"
                max="4"
                v-model="priority"
                label="priority:"
              />
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
                >{{ $t("subTasks") }}</router-link
              >
              <router-link
                class="task-navigation__item"
                active-class="task-navigation__item_active"
                :to="{ name: 'TodoComments' }"
                >{{ $t("comments") }}</router-link
              >
              <router-link
                class="task-navigation__item"
                active-class="task-navigation__item_active"
                :to="{ name: 'TodoLabels' }"
                >{{ $t("labels") }}</router-link
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
import TodoCheckBox from "./task/TodoCheckBox.vue";
export default {
  data: () => ({
    active: true,
    priority: 1,
  }),
  components: {
    TodoLabelChip,
    TodoCheckBox,
  },
  watch: {
    active(newValue) {
      if (!newValue) {
        this.$router.push({
          name: this.$route.matched[1].name,
        });
      }
    },
    priority(newPriority) {
      this.$store.dispatch("changePriority", {
        taskID: this.taskData._id,
        priority: newPriority,
      });
    },
  },
  methods: {
    performTask() {
      this.$store.dispatch("performTask", this.taskData._id);
      this.active = false;
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
    this.priority = this.taskData.priority;
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
