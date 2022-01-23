<template>
  <div>
    <div>
      <vs-popup :active.sync="addTaskPopup" title="">
        <todo-add></todo-add>
      </vs-popup>
    </div>
    <header class="header">
      <div class="header__area">
        <button class="header-btn" @click="$emit('toggleMenu')">
          <img :src="require('@/assets/icons/menu.svg')" class="header-ico" />
          <div class="header-btn__prompt">
            Menu <span class="header-btn__key">M</span>
          </div>
        </button>
        <button class="header-btn">
          <img :src="require('@/assets/icons/home.svg')" class="header-ico" />
          <div class="header-btn__prompt">
            Home <span class="header-btn__key">H</span>
          </div>
        </button>
      </div>
      <div class="header__area">
        <button class="header-btn" @click="addTaskPopup = true">
          <img :src="require('@/assets/icons/plus.svg')" class="header-ico" />
          <div class="header-btn__prompt">
            Add task <span class="header-btn__key">A</span>
          </div>
        </button>
        <button>
          <vs-avatar color="success" :text="user.name.slice(0, 1)" />
        </button>
      </div>
    </header>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd.vue";
export default {
  name: "AppHeader",
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  components: {
    TodoAdd,
  },
  data: () => ({
    addTaskPopup: false,
  }),
};
</script>
