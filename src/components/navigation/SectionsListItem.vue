<template>
  <li class="navigation__section-list_item">
    <router-link
      :to="{ name: routeName }"
      class="navigation__section-list_body"
    >
      <div class="navigation__section-list_title">
        <slot name="icon"></slot>
        <div class="nav-text">{{ name }}</div>
      </div>
      <div>
        <span class="navigation__section-list_task-count">{{ taskCount }}</span>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "SectionsListItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    taskCount: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>
