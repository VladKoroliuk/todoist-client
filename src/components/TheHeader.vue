<template>
  <div>
    <div>
      <vs-popup :active.sync="addTaskPopup" title="">
        <todo-add></todo-add>
      </vs-popup>
    </div>
    <header class="header">
      <div class="header__area">
        <header-button
          :text="$t('menu')"
          :ico="require('@/assets/icons/menu.svg')"
          hotKey="M"
          @click="$emit('toggleMenu')"
        />
        <header-button
          :text="$t('home')"
          :ico="require('@/assets/icons/home.svg')"
          hotKey="H"
          @click="$emit('toggleMenu')"
        />
      </div>
      <div class="header__area">
        <header-button
          :text="$t('addTask')"
          :ico="require('@/assets/icons/plus.svg')"
          hotKey="A"
          @click="addTaskPopup = true"
        />
        <div v-click-outside="closeProfileMenu">
          <button>
            <vs-avatar
              color="success"
              :text="user.name.slice(0, 1)"
              @click="isProfileMenuOpen = true"
            />
          </button>
          <header-menu :user="user" v-if="isProfileMenuOpen" />
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import userService from "../services/user.js";
import TodoAdd from "./task/TodoAdd.vue";
import HeaderButton from "./header/HeaderButton.vue";
import HeaderMenu from "./header/HeaderMenu.vue";
export default {
  name: "AppHeader",
  data: () => ({
    isProfileMenuOpen: false,
    addTaskPopup: false,
  }),
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  computed: {
    avatarLink() {
      return userService.avatar;
    },
  },
  methods: {
    closeProfileMenu() {
      if (this.isProfileMenuOpen) {
        this.isProfileMenuOpen = false;
      }
    },
  },
  components: {
    TodoAdd,
    HeaderButton,
    HeaderMenu,
  },
};
</script>
