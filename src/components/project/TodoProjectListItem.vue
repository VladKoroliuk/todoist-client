<template>
  <router-link
    :to="{ name: 'Project', params: { projectID: project._id } }"
    class="label-list-item"
  >
    <div class="label-list-item__content">
      <div class="project-point-body">
        <div class="project-point" :style="{ background: project.color }"></div>
      </div>
      <div>{{ project.name }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
    },
  },
};
</script>
