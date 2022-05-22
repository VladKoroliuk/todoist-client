<template>
  <div class="settings-account">
    <section class="settings-account__avatar-section">
      <div>
        <todo-avatar size="70px"></todo-avatar>
      </div>
      <div class="flex gap-3">
        <vs-input type="file" @change="changeAvatar($event)"></vs-input>
      </div>
    </section>
    <section class="settings-account__name mt-11">
      <vs-input :label="$t('name')" v-model="userData.name"></vs-input>
      <div class="mt-4">
        <vs-button v-if="userData.name != userDataCopy.name" @click="changeName"
          >Save</vs-button
        >
      </div>
    </section>
  </div>
</template>
<script>
import TodoAvatar from "../TodoAvatar.vue";
import userService from "../../services/user.js";
export default {
  data() {
    return {
      userData: userService.getData,
      userDataCopy: userService.getData,
    };
  },
  computed: {
    avatarLink() {
      return userService.avatar;
    },
  },
  components: {
    TodoAvatar,
  },
  methods: {
    async changeName() {
      await userService.changeName(this.userData.name);
    },
    async changeAvatar(event) {
      await userService.uploadAvatar(event.target.files[0]);
    },
  },
};
</script>
