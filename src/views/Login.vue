<template>
  <div class="Login flex justify-center items-center h-screen">
    <div class="drop-shadow-2xl bg-slate-900 formBlock">
      <form @submit.prevent="login">
        <div>
          <div class="my-6">
            <h1 class="text-4xl font-bold my-7 block">Log in</h1>
          </div>
          <div class="my-6">
            <vs-input
              label-placeholder="Email"
              autocomplete="off"
              v-model="email"
              icon-after
            >
              <template #icon> @ </template>
              <template #message-danger>
                {{ validation.firstError("email") }}
              </template>
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="password"
              label-placeholder="Password"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template #icon>
                <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
                <i v-else class="bx bx-hide"></i>
              </template>
              <template #message-danger>
                {{ validation.firstError("password") }}
              </template>
            </vs-input>
            <div class="vs-input__message vs-input__message--danger">
              {{ error }}
            </div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <vs-button type="submit"> Log in </vs-button>
            <a href="#" class="text-xs">Forgot Password?</a>
          </div>
          <div
            class="new text-xs text-zinc-400 w-full flex justify-center my-2"
          >
            New Here?<router-link :to="{ name: 'Register' }"
              >Create New Account</router-link
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
export default {
  data: () => ({
    email: "",
    password: "",
    hasVisiblePassword: false,
    error: "",
  }),
  validators: {
    email(value) {
      return SimpleVueValidation.Validator.value(value).required().email();
    },
    password(value) {
      return SimpleVueValidation.Validator.value(value)
        .required()
        .minLength(8)
        .maxLength(38);
    },
  },
  methods: {
    login() {
      this.$validate().then((success) => {
        if (success) {
          userService.login(this.email, this.password).then((response) => {
            if (response.message) {
              return (this.error = response.message);
            }
            this.$router.push({ name: "App" });
          });
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
