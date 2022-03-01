<template>
  <div class="selectColor">
    <vs-select :label="$t('color')" v-model="selected">
      <vs-select-item
        v-for="(color, idx) in colors"
        :key="idx"
        :value="color.hex"
        :text="color.name"
      />
    </vs-select>
    <div class="colorLabel" :style="{ background: selected }"></div>
  </div>
</template>
<script>
import colorsJson from "./colors.json";
export default {
  data: () => ({
    selected: "#0f0f0f",
  }),
  computed: {
    colors() {
      return colorsJson;
    },
  },
  watch: {
    selected(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
<style scoped>
.selectColor {
  display: flex;
  gap: 10px;
  align-items: center;
}
.colorLabel {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}
</style>
