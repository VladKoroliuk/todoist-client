<template>
  <div>
    <form>
      <div class="flex gap-3 flex-col">
        <div>
          <vs-input placeholder="Title" label="Title" v-model="title" />
        </div>
        <div>
          <vs-textarea placeholder="Description" v-model="description" />
        </div>
        <div>
          <div>
            <label class="vs-input--label" for="deadLine">Deadline</label>
          </div>
          <input
            type="date"
            name="deadLine"
            v-model="deadline"
            :min="todayDate"
          />
        </div>
        <div class="flex gap-4">
          <vs-select label="Project" v-model="project">
            <vs-select-item value="test" text="test" />
          </vs-select>
          <vs-select label="Priority" v-model="priority">
            <vs-select-item value="test" text="test" />
          </vs-select>
        </div>
      </div>
      <form-error :validation="validation"></form-error>
    </form>
    <vs-button class="my-5 w-full" @click="add"> Add task </vs-button>
  </div>
</template>
<script>
import SimpleVueValidation from "simple-vue-validator";
import FormError from "../components/form/FormError.vue";
export default {
  data: () => ({
    title: "",
    description: "",
    error: "",
    project: null,
    priority: null,
    deadline: null,
  }),
  validators: {
    title(value) {
      return SimpleVueValidation.Validator.value(value)
        .required()
        .minLength(3)
        .maxLength(60);
    },
  },
  components: {
    FormError,
  },
  methods: {
    add() {
      this.$validate().then((success) => {
        if (success) {
          this.$store.dispatch("addTodo", {
            text: this.title,
            description: this.description,
            term: this.deadline,
          });
          return;
        }
      });
    },
  },
  computed: {
    todayDate() {
      return this.$moment().format("Y-MM-D");
    },
  },
  mounted() {
    this.deadline = this.todayDate;
  },
};
</script>
