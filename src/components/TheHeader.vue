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
            {{ $t("menu") }} <span class="header-btn__key">M</span>
          </div>
        </button>
        <button class="header-btn">
          <img :src="require('@/assets/icons/home.svg')" class="header-ico" />
          <div class="header-btn__prompt">
            {{ $t("home") }} <span class="header-btn__key">H</span>
          </div>
        </button>
      </div>
      <div class="header__area">
        <button class="header-btn" @click="addTaskPopup = true">
          <img :src="require('@/assets/icons/plus.svg')" class="header-ico" />
          <div class="header-btn__prompt">
            {{ $t("addTask") }} <span class="header-btn__key">A</span>
          </div>
        </button>
        <div v-click-outside="closeProfileMenu">
          <button>
            <vs-avatar
              color="success"
              :text="user.name.slice(0, 1)"
              @click="isProfileMenuOpen = true"
              :src="avatarLink"
            />
          </button>
          <div class="user-profile-menu" v-if="isProfileMenuOpen">
            <ul>
              <router-link :to="{ name: 'Settings' }">
                <li class="user-profile-menu__item-header">
                  <div class="user-profile-menu__ico">
                    <vs-avatar
                      :text="user.name.slice(0, 1)"
                      color="success"
                      size="40px"
                      :src="avatarLink"
                    ></vs-avatar>
                  </div>
                  <div>
                    <div>
                      <span class="user-profile-menu__name">{{
                        user.name
                      }}</span>
                    </div>
                    <small class="user-profile-menu__email">{{
                      user.email
                    }}</small>
                  </div>
                </li>
              </router-link>
              <router-link :to="{ name: 'SettingsAccount' }">
                <li class="user-profile-menu__item">
                  <div class="user-profile-menu__ico">
                    <svg width="24" height="24" fill="none" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 12a8.96 8.96 0 001.778 5.372A8.987 8.987 0 0012 21a8.981 8.981 0 007.222-3.628A9 9 0 103 12zm9 3c2.747 0 5.259.472 6.562 1.577a8 8 0 10-13.124 0C6.74 15.472 9.253 15 12 15zm5.94 2.36A7.98 7.98 0 0112 20a7.98 7.98 0 01-5.94-2.64C7.022 16.518 9.18 16 12 16c2.82 0 4.978.519 5.94 1.36zM12 14a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zm2.75-3.75a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>{{ $t("account") }}</div>
                </li>
              </router-link>
              <router-link :to="{ name: 'SettingsTheme' }">
                <li class="user-profile-menu__item">
                  <div class="user-profile-menu__ico">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 18.75C14 19.875 14.5 21 16 21c3 0 5-4 5-9s-4.03-9-9-9a9 9 0 00-9 9c0 7.418 2.751 6.307 5.397 5.238.92-.371 1.828-.738 2.603-.738 1.5 0 2 1.125 2.5 2.25zM20 12c0 4.664-1.796 8-4 8-.716 0-.985-.303-1.586-1.656-.899-2.022-1.63-2.844-3.414-2.844-.835 0-1.459.198-3.017.827l-.252.102c-1.478.59-2.188.714-2.622.453C4.453 16.49 4 15 4 12a8 8 0 018-8c4.429 0 8 3.563 8 8zm-2 3.5a1 1 0 11-2 0 1 1 0 012 0zm-.5-3a1 1 0 100-2 1 1 0 000 2zM16.75 8a1 1 0 11-2 0 1 1 0 012 0zM12 7.5a1 1 0 100-2 1 1 0 000 2zM9.25 8a1 1 0 11-2 0 1 1 0 012 0zM6.5 12.5a1 1 0 100-2 1 1 0 000 2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>{{ $t("theme") }}</div>
                </li>
              </router-link>
              <router-link :to="{ name: 'SettingsGeneral' }">
                <li class="user-profile-menu__item">
                  <div class="user-profile-menu__ico">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.96 3a1 1 0 00-.996.918l-.088 1.07a7.157 7.157 0 00-1.34.545l-.811-.688a1 1 0 00-1.354.056l-1.47 1.47a1 1 0 00-.056 1.354l.688.81a7.157 7.157 0 00-.544 1.34l-1.071.089A1 1 0 003 10.96v2.08a1 1 0 00.918.996l1.134.094c.142.436.325.856.547 1.256l-.754.89a1 1 0 00.056 1.353l1.47 1.47a1 1 0 001.354.056l.957-.812c.378.188.771.344 1.177.463l.105 1.276a1 1 0 00.996.918h2.08a1 1 0 00.996-.918l.11-1.34c.378-.123.745-.279 1.096-.463l1.033.876a1 1 0 001.354-.056l1.47-1.47a1 1 0 00.056-1.354l-.876-1.033c.184-.351.34-.718.463-1.096l1.34-.11A1 1 0 0021 13.04v-2.08a1 1 0 00-.918-.996l-1.276-.105a7.15 7.15 0 00-.463-1.177l.812-.957a1 1 0 00-.056-1.354l-1.47-1.47a1 1 0 00-1.354-.056l-.889.754c-.4-.222-.82-.405-1.256-.547l-.094-1.134A1 1 0 0013.04 3h-2.08zm-.5 2.868a.5.5 0 00.383-.446L10.96 4h2.08l.12 1.474a.5.5 0 00.368.442c.582.158 1.136.4 1.646.718a.5.5 0 00.588-.043l1.16-.983 1.47 1.47-1.031 1.216a.5.5 0 00-.054.569 6.16 6.16 0 01.622 1.582.5.5 0 00.445.382L20 10.96v2.08l-1.679.138a.5.5 0 00-.441.366 6.159 6.159 0 01-.637 1.503.5.5 0 00.05.578l1.099 1.297-1.47 1.47-1.297-1.1a.5.5 0 00-.578-.049c-.47.278-.975.492-1.503.637a.5.5 0 00-.366.441L13.039 20H10.96l-.133-1.626a.5.5 0 00-.382-.445 6.16 6.16 0 01-1.582-.622.5.5 0 00-.569.054l-1.216 1.03-1.47-1.47.983-1.159a.5.5 0 00.043-.588 6.165 6.165 0 01-.718-1.646.5.5 0 00-.442-.367L4 13.04v-2.08l1.422-.117a.5.5 0 00.446-.382c.145-.61.381-1.192.7-1.728a.5.5 0 00-.048-.579l-.912-1.076 1.47-1.47 1.076.912a.5.5 0 00.58.049 6.159 6.159 0 011.727-.701zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm2.5-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div>{{ $t("general") }}</div>
                </li>
              </router-link>
              <li class="user-profile-menu__item">
                <div class="user-profile-menu__ico">
                  <svg width="24" height="24" aria-hidden="true">
                    <g fill="none" fill-rule="evenodd">
                      <path
                        stroke="currentColor"
                        d="M6.5 8.3V5.63c0-1.17.9-2.13 2-2.13h7c1.1 0 2 .95 2 2.13v11.74c0 1.17-.9 2.13-2 2.13h-7c-1.1 0-2-.95-2-2.13V14.7"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M12.8 11l-2.15-2.15a.5.5 0 11.7-.7L14 10.79a1 1 0 010 1.42l-2.65 2.64a.5.5 0 01-.7-.7L12.79 12H4.5a.5.5 0 010-1h8.3z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>{{ $t("logout") }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import userService from "../services/user.js";
import TodoAdd from "./task/TodoAdd.vue";
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
  },
};
</script>
