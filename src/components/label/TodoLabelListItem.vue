<template>
  <router-link :to="{ name: 'App' }" class="label-list-item">
    <div class="label-list-item__content">
      <div>
        <svg width="20" height="20" :fill="label.color" viewBox="0 0 20 20">
          <path
            fill-rule="nonzero"
            d="M5.914 11.086l4.5-4.5A2 2 0 0 1 11.828 6H16a2 2 0 0 1 2 2v4.172a2 2 0 0 1-.586 1.414l-4.5 4.5a2 2 0 0 1-2.828 0l-4.172-4.172a2 2 0 0 1 0-2.828zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          ></path>
        </svg>
      </div>
      <div>{{ label.name }}</div>
    </div>
    <div class="label-list-item__count" v-if="taskCount > 0">
      {{ taskCount }}
    </div>
    <div class="label-list-item__delete" @click.prevent.stop="deleteLabel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="gray"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
        />
      </svg>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    label: {
      type: Object,
      required: true,
    },
  },
  computed: {
    taskCount() {
      return this.$store.getters.countTasksByLabel(this.label._id);
    },
  },
  methods: {
    deleteLabel() {
      this.$store.dispatch("deleteLabel", this.label._id);
    },
  },
};
</script>
