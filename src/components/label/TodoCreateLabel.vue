<template>
  <div>
    <form>
      <div class="flex gap-3 flex-col">
        <div>
          <vs-input :placeholder="$t('name')" label="Name" v-model="name" />
        </div>
        <div>
          <todo-color v-model="color"></todo-color>
        </div>
      </div>
      <form-error :validation="validation"></form-error>
    </form>
    <vs-button class="my-5 w-full" @click="createLabel">
      Create label
    </vs-button>
  </div>
</template>
<script>
import SimpleVueValidation from "simple-vue-validator";
import FormError from "../form/FormError.vue";
import TodoColor from "../form/todoColor/TodoColor.vue";
export default {
  data: () => ({
    name: "",
    color: "#333",
  }),
  validators: {
    name(value) {
      return SimpleVueValidation.Validator.value(value)
        .required()
        .minLength(3)
        .maxLength(25);
    },
  },
  components: {
    FormError,
    TodoColor,
  },
  methods: {
    createLabel() {
      this.$validate().then((success) => {
        if (success) {
          this.$store.dispatch("createLabel", {
            name: this.name,
            color: this.color,
          });
          this.name = "";
          this.color = "#333";
          return this.$emit("close");
        }
      });
    },
  },
};
</script>
