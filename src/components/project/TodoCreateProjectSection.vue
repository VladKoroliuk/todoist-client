<template>
  <div>
    <div class="pb-4">
      <base-divider @click.native="isOpen = true"></base-divider>
    </div>
    <div v-if="isOpen">
      <vs-input placeholder="Name" v-model="name" />
      <div class="mt-4">
        <vs-button color="primary" type="filled" @click="create"
          >Create</vs-button
        >
        <vs-button color="primary" type="flat" @click="isOpen = false"
          >Cancel</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseDivider from "../BaseDivider.vue";
import { mapActions } from "vuex";
export default {
  components: {
    BaseDivider,
  },
  props: {
    projectID: {
      required: true,
    },
  },
  data() {
    return {
      name: "",
      isOpen: false,
    };
  },
  methods: {
    ...mapActions(["createSection"]),
    create() {
      this.createSection({
        projectID: this.projectID,
        name: this.name,
      });
      this.name = "";
      this.isOpen = false;
    },
  },
};
</script>
