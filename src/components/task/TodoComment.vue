<template>
  <div class="comment">
    <div class="comment__avatar">
      <vs-avatar color="primary" :text="commentData.userName[0]" size="40px" />
    </div>
    <div class="comment__body">
      <div class="comment__header">
        <span class="comment__header-name">{{ commentData.userName }}</span>
        <span class="comment__header-time">{{
          $moment(commentData.date).format("D MMM hh:mm")
        }}</span>
      </div>
      <div class="comment__body">
        {{ commentData.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentData: {
      type: Object,
      required: true,
    },
  },
};
</script>
