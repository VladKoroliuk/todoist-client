<template>
  <router-link
    :to="{ name: 'Label', params: { labelID: data._id } }"
    class="label-chip"
  >
    <span
      class="label-chip__body"
      :style="{
        background: `${data.color}40`, // make color more lighter
        color: data.color,
      }"
      >{{ data.name }}
    </span>
  </router-link>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
