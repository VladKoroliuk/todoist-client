<template>
  <div class="Login flex justify-center items-center h-screen">
    <div class="drop-shadow-2xl bg-slate-900 formBlock">
      <form @submit.prevent="register">
        <div>
          <div class="my-6">
            <h1 class="text-4xl font-bold my-7 block">Sign in</h1>
          </div>
          <div class="my-6">
            <vs-input
              label-placeholder="Email"
              autocomplete="off"
              v-model="email"
            >
            </vs-input>
          </div>
          <div class="my-6">
            <vs-input
              label-placeholder="Name"
              autocomplete="off"
              v-model="name"
            >
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="password"
              label-placeholder="Password"
            >
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="confirmPassword"
              label-placeholder="Confirm password"
            >
            </vs-input>
            <form-error
              :inputError="error"
              :validation="validation"
            ></form-error>
          </div>
          <div class="flex justify-between items-center mt-2">
            <vs-button color="primary" type="filled" @click="register"
              >Sign in</vs-button
            >
          </div>
          <div
            class="new text-xs text-zinc-400 w-full flex justify-center my-2"
          >
            Have account?<router-link :to="{ name: 'Login' }"
              >Login</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import SimpleVueValidation from "simple-vue-validator";
import userService from "../services/user.js";
import FormError from "../components/form/FormError.vue";
export default {
  data: () => ({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    error: "",
  }),
  components: {
    FormError,
  },
  methods: {
    register() {
      this.$validate().then((success) => {
        if (success) {
          userService
            .register(this.email, this.password, this.name)
            .then((response) => {
              if (response.message) {
                return (this.error = response.message);
              }
              this.$router.push({ name: "App" });
            });
        }
      });
    },
  },
  validators: {
    email(value) {
      return SimpleVueValidation.Validator.value(value).required().email();
    },
    name(value) {
      return SimpleVueValidation.Validator.value(value)
        .required()
        .minLength(3)
        .maxLength(16);
    },
    password(value) {
      return SimpleVueValidation.Validator.value(value)
        .required()
        .minLength(8)
        .maxLength(38);
    },
    confirmPassword(value) {
      return SimpleVueValidation.Validator.custom(() => {
        if (this.password != value) {
          return "The fields must be the same!";
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.formBlock {
  width: 300px;
  h1 {
    margin-bottom: 50px;
  }
}
</style>
