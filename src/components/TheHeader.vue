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
          :hotKey="getKey(keys.MENU)"
          @click="$emit('toggleMenu')"
        />
        <header-button
          :text="$t('home')"
          :ico="require('@/assets/icons/home.svg')"
          :hotKey="getKey(keys.HOME)"
        />
      </div>
      <div class="header__area">
        <header-button
          :text="$t('addTask')"
          :ico="require('@/assets/icons/plus.svg')"
          :hotKey="getKey(keys.ADD_TASK)"
          @click="addTaskPopup = true"
        />
        <div v-click-outside="closeProfileMenu">
          <button @click="isProfileMenuOpen = true">
            <todo-avatar></todo-avatar>
          </button>
          <header-menu :user="user" v-if="isProfileMenuOpen" />
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import TodoAdd from "./task/TodoAdd.vue";
import HeaderButton from "./header/HeaderButton.vue";
import HeaderMenu from "./header/HeaderMenu.vue";
import TodoAvatar from "./TodoAvatar.vue";
import {
  subscribeHotKey,
  getKeyByCode,
  DEFAULT_KEYS,
} from "../services/hotKeys.js";
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
    keys() {
      return DEFAULT_KEYS;
    },
  },
  created() {
    subscribeHotKey(DEFAULT_KEYS.ADD_TASK, () => {
      this.addTaskPopup = !this.addTaskPopup;
    });
  },
  methods: {
    getKey: getKeyByCode,
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
    TodoAvatar,
  },
};
</script>
