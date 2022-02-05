<template>
  <div class="py-7">
    <div>
      <div
        v-for="label in labels"
        :key="label._id"
        class="flex justify-between px-10 py-2"
      >
        <div class="flex">
          <div class="mr-3">
            <vs-switch
              vs-type="success"
              v-model="selectedLabels"
              :vs-value="label._id"
              :color="switchColor(label)"
            ></vs-switch>
          </div>
          <div :style="{ color: switchColor(label) }">
            {{ label.name }}
          </div>
        </div>
        <div class="text-gray-500">
          {{ countTasksByLabel(label._id) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    selectedLabels: [],
  }),
  computed: {
    ...mapState({
      labels: (state) => state.label.labels,
    }),
    ...mapGetters(["countTasksByLabel"]),
  },
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    switchColor(labelData) {
      const isLabelSelected = this.selectedLabels.includes(labelData._id);
      return isLabelSelected ? labelData.color : `#CCC`;
    },
  },
  watch: {
    selectedLabels(newLabels) {
      this.$store.dispatch("changeLabels", {
        id: this.$route.params.id,
        labels: newLabels,
      });
    },
  },
  mounted() {
    this.selectedLabels = this.taskData.labels;
  },
};
</script>
