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
              icon-after
            >
              <template #icon> @ </template>
              <template #message-danger>
                {{ validation.firstError("email") }}
              </template>
            </vs-input>
          </div>
          <div class="my-6">
            <vs-input
              label-placeholder="Name"
              autocomplete="off"
              v-model="name"
              icon-after
            >
              <template #icon> <i class="bx bx-user"></i> </template>
              <template #message-danger>
                {{ validation.firstError("name") }}
              </template>
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="password"
              label-placeholder="Password"
              :progress="getProgress"
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
              <template v-if="getProgress >= 100" #message-success>
                Secure password
              </template>
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="confirmPassword"
              label-placeholder="Confirm password"
              :visiblePassword="hasVisibleConfirmPassword"
              icon-after
              @click-icon="
                hasVisibleConfirmPassword = !hasVisibleConfirmPassword
              "
            >
              <template #icon>
                <i v-if="!hasVisibleConfirmPassword" class="bx bx-show-alt"></i>
                <i v-else class="bx bx-hide"></i>
              </template>
              <template #message-danger>
                {{ validation.firstError("confirmPassword") }}
              </template>
            </vs-input>
          </div>
          <div class="flex justify-between items-center mt-2">
            <vs-button type="submit"> Sign in </vs-button>
          </div>
          <div
            class="new text-xs text-zinc-400 w-full flex justify-center my-2"
          >
            Have account?<a href="#">Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import SimpleVueValidation from "simple-vue-validator";
export default {
  data: () => ({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    hasVisiblePassword: false,
    hasVisibleConfirmPassword: false,
  }),
  methods: {
    register() {
      this.$validate().then((success) => {
        if (success) {
          alert("Validation succeeded!");
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
          return "Fields must be the same!";
        }
      });
    },
  },
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number
      if (/\d/.test(this.password)) progress += 20;
      // at least one capital letter
      if (/(.*[A-Z].*)/.test(this.password)) progress += 20;
      // at menons a lowercase
      if (/(.*[a-z].*)/.test(this.password)) progress += 20;
      // more than 5 digits
      if (this.password.length >= 6) progress += 20;
      // at least one special character
      if (/[^A-Za-z0-9]/.test(this.password)) progress += 20;

      return progress;
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
