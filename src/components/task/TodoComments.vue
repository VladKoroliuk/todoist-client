<template>
  <div class="task-comments">
    <vs-progress indeterminate color="primary" v-show="isLoading"
      >primary</vs-progress
    >
    <div class="task-comments__content">
      <todo-comment
        v-for="comment in comments"
        :key="comment._id"
        :commentData="comment"
      ></todo-comment>
    </div>
    <div class="task-comments__menu">
      <vs-input placeholder="Your comment" v-model="commentText"></vs-input>
      <vs-button @click="createComment">Send</vs-button>
    </div>
  </div>
</template>
<script>
import TodoComment from "./TodoComment.vue";
import CommentService from "../../services/comment.js";
export default {
  data: () => ({
    comments: [],
    isLoading: true,
    commentText: "",
  }),
  components: {
    TodoComment,
  },
  props: {
    taskData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async createComment() {
      if (!this.commentText) {
        return;
      }

      const response = await CommentService.create({
        text: this.commentText,
        task: this.taskData._id,
      });
      this.comments.push(response);
      this.commentText = "";
    },
  },
  async mounted() {
    this.comments = await CommentService.get(this.taskData._id);
    this.isLoading = false;
  },
};
</script>
