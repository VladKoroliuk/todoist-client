<template>
  <div class="py-5">
    <div class="mb-2">
      <vs-input placeholder="Name" v-model="newTaskData.text" />
    </div>
    <div>
      <vs-textarea
        placeholder="Description"
        v-model="newTaskData.description"
      />
    </div>
    <div>
      <vs-button color="primary" type="filled" @click.native="save"
        >Save</vs-button
      >
      <vs-button color="dark" type="flat" @click.native="cancel"
        >Cancel</vs-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    newTaskData: {},
  }),
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cancel() {
      this.$emit("cancelEdit");
    },
    save() {
      this.$store.dispatch("changeTodo", this.newTaskData);
      this.cancel();
    },
  },
  created() {
    this.newTaskData = Object.assign({ id: this.taskData._id }, this.taskData);
  },
};
</script>
