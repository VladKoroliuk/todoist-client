<template>
  <div>
    <ul>
      <li v-for="label in labels" :key="label._id">
        <label-list-item :label="label"></label-list-item>
      </li>
    </ul>
  </div>
</template>
<script>
import LabelListItem from "./TodoLabelListItem.vue";
import { mapState } from "vuex";

export default {
  name: "labelList",
  components: {
    LabelListItem,
  },
  computed: mapState({
    labels: (state) => state.label.labels,
  }),
};
</script>
