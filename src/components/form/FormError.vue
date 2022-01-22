<template>
  <span class="error"> {{ error }} </span>
</template>
<script>
export default {
  props: {
    /**
     * Instance of validation
     * (SimpleVueValidation plugin)
     */
    validation: {
      type: Object,
      required: true,
    },
    /**
     * Sometimes we need to set error manually:
     */
    inputError: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    error() {
      if (this.validation.errors.length == 0) {
        return this.inputError;
      }

      const firstError = this.validation.errors[0];

      return `${firstError.field} is ${firstError.message}`.toLowerCase();
    },
  },
};
</script>
