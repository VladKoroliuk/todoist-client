<template>
  <div class="Login flex justify-center items-center h-screen">
    <div class="drop-shadow-2xl bg-slate-900 formBlock">
      <form @submit.prevent="login">
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
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="value"
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

              <template v-if="getProgress >= 100" #message-success>
                Secure password
              </template>
            </vs-input>
          </div>
          <div class="mt-6">
            <vs-input
              type="password"
              v-model="value"
              label-placeholder="Password"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template #icon>
                <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
                <i v-else class="bx bx-hide"></i>
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
export default {
  data: () => ({
    value: "",
    hasVisiblePassword: false,
    email: "",
    name: "",
  }),
  methods: {
    login() {
      alert(1);
    },
  },
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number

      if (/\d/.test(this.value)) {
        progress += 20;
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.value)) {
        progress += 20;
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.value)) {
        progress += 20;
      }

      // more than 5 digits

      if (this.value.length >= 6) {
        progress += 20;
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.value)) {
        progress += 20;
      }

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
