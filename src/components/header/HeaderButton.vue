<template>
  <button class="header-btn" @click="$emit('click')">
    <img :src="ico" class="header-ico" />
    <div class="header-btn__prompt" v-if="text != ''">
      {{ text }}
      <span class="header-btn__key" v-if="hotKey != ''">{{ hotKey }}</span>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    ico: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: "",
    },
    hotKey: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
