<template>
  <div>
    <form>
      <div class="flex gap-3 flex-col">
        <div>
          <vs-input
            :placeholder="$t('title')"
            :label="$t('title')"
            v-model="title"
          />
        </div>
        <div>
          <vs-textarea :placeholder="$t('description')" v-model="description" />
        </div>
        <div>
          <div>
            <label class="vs-input--label" for="deadLine">{{
              $t("deadline")
            }}</label>
          </div>
          <input
            type="date"
            name="deadLine"
            v-model="deadline"
            :min="todayDate"
          />
        </div>
        <div class="flex gap-4">
          <vs-select :label="$t('project')" v-model="projectState">
            <vs-select-item value="test" text="test" />
          </vs-select>
          <vs-select :label="$t('priority')" v-model="priority">
            <vs-select-item value="1" text="1" />
            <vs-select-item value="2" text="2" />
            <vs-select-item value="3" text="3" />
            <vs-select-item value="4" text="4" />
            <vs-select-item value="5" text="5" />
          </vs-select>
        </div>
      </div>
      <form-error :validation="validation"></form-error>
    </form>
    <vs-button class="my-5 w-full" @click="add">{{ $t("addTask") }}</vs-button>
  </div>
</template>
<script>
import SimpleVueValidation from "simple-vue-validator";
import FormError from "../form/FormError.vue";
import { mapState } from "vuex";
export default {
  data: () => ({
    title: "",
    description: "",
    error: "",
    priority: 1,
    deadline: null,
    projectState: null,
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
  props: {
    parentID: {
      type: String,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    project: {
      type: String,
      required: false,
      default: null,
    },
    projectSection: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    add() {
      const newTask = {
        text: this.title,
        description: this.description,
        term: this.deadline,
        priority: this.priority,
        labels: [this.label],
        project: this.projectState,
        projectSection: this.projectSection,
      };
      if (this.parentID) {
        newTask.parentID = this.parentID;
      }

      this.$validate().then((success) => {
        if (success) {
          this.$store.dispatch("addTodo", newTask);
          this.title = "";
          this.description = "";
          this.priority = 1;
          this.projectState = null;
          this.$emit("close");
          return;
        }
      });
    },
  },
  computed: {
    ...mapState(["projects"]),
    todayDate() {
      return this.$moment().format("Y-MM-D");
    },
  },
  mounted() {
    this.deadline = this.todayDate;
    this.projectState = this.project;
  },
};
</script>
