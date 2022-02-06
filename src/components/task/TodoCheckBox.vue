<template>
  <div
    class="checkbox checkbox_task"
    @click.stop="$emit('click')"
    :style="{ border: `1px solid ${priorityColor}` }"
  >
    <svg class="checkbox-svg">
      <path
        :fill="priorityColor"
        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    priority: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    priorityColor() {
      const colors = {
        1: "gray",
        2: "#5297FF",
        3: "#FF9A14",
        4: "#FF7066",
      };

      return colors[this.priority];
    },
  },
};
</script>
