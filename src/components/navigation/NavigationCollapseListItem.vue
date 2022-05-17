<template>
  <div>
    <vs-collapse-item>
      <div slot="header">{{ title }}</div>
      <div class="flex">
        <slot name="button"></slot>
      </div>
      <slot name="list"></slot>
    </vs-collapse-item>
  </div>
</template>
<script>
export default {
  name: "NavigationCollapseListItem",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
