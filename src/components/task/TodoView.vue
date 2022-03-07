<template>
  <div
    class="task"
    @click="$router.push({ name: 'TaskWindow', params: { id: taskData._id } })"
  >
    <todo-check-box
      :priority="taskData.priority"
      @click="$store.dispatch('performTask', taskData._id)"
    ></todo-check-box>
    <div class="task__content">
      <div class="task__content-name">
        {{ taskData.text }}
      </div>
      <div class="task__content-description">
        {{ taskData.description }}
      </div>
      <div class="task-deadline" v-if="isOverdue">
        <svg width="12" height="12" viewBox="0 0 12 12" class="calendar_icon">
          <path
            fill="currentColor"
            fill-rule="nonzero"
            d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
          ></path>
        </svg>
        <div>
          {{ $moment(taskData.term).fromNow() }}
        </div>
      </div>
      <div>
        <todo-label-chip
          v-for="label in labels"
          :key="label._id"
          :data="label"
        ></todo-label-chip>
      </div>
    </div>
    <div class="task__menu">
      <div>
        <div class="task__menu-handler" @click.stop>
          <svg width="24" height="24">
            <path
              class="handler_path"
              fill="currentColor"
              d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="task__menu-base-btns" @click.stop>
        <div class="task__menu-base-btns-item">
          <button @click="$emit('edit')">
            <svg width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="currentColor"
                  d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                ></path>
              </g>
            </svg>
          </button>
          <span class="task__menu-base-btns-item-tooltiptext">{{
            $t("edit")
          }}</span>
        </div>
        <div class="task__menu-base-btns-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-reach-tooltip-trigger=""
          >
            <path
              fill="currentColor"
              fill-rule="nonzero"
              d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
            ></path>
          </svg>
          <span class="task__menu-base-btns-item-tooltiptext">{{
            $t("deadline")
          }}</span>
        </div>
        <div class="task__menu-base-btns-item">
          <button
            @click="
              $router.push({
                name: 'TodoComments',
                params: { id: taskData._id },
              })
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              data-svgs-path="sm1/comments.svg"
            >
              <path
                fill="currentColor"
                fill-rule="nonzero"
                d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"
              ></path>
            </svg>
          </button>
          <span class="task__menu-base-btns-item-tooltiptext">{{
            $t("comments")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TodoLabelChip from "../label/TodoLabelChip.vue";
import TodoCheckBox from "./TodoCheckBox.vue";
export default {
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
  components: {
    TodoLabelChip,
    TodoCheckBox,
  },
  computed: {
    isOverdue() {
      return this.$moment().diff(this.taskData.term, "days") >= 1;
    },
    labels() {
      return this.$store.getters.getTaskLabels(this.taskData.labels);
    },
  },
};
</script>
