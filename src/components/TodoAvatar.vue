<template>
  <vs-avatar v-if="!hasError" :src="avatarURL" :size="size" />
  <vs-avatar v-else :color="color" :text="avatarText" :size="size" />
</template>

<script>
import Api from "../services/api.js";
export default {
  name: "BaseAvatar",
  data: () => {
    return {
      hasError: false,
    };
  },
  props: {
    color: {
      type: String,
      default: "success",
      required: false,
    },
    size: {
      type: Number,
      required: false,
      default: 30,
    },
    text: {
      type: String,
      default: "",
      required: false,
    },
  },
  inject: ["avatarURL", "userData"],
  async created() {
    try {
      await Api.request(this.avatarURL, "GET");
    } catch (e) {
      this.hasError = true;
    }
  },
  computed: {
    avatarText() {
      const avatarText = !this.text ? this.userData.name : this.text;
      return avatarText.slice(0, 1);
    },
  },
};
</script>
