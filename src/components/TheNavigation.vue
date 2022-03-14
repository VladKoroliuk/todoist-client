<template>
  <nav class="navigation" :class="{ navigation__closed: !isOpen }">
    <vs-popup :active.sync="modal.createLabel" title="">
      <todo-create-label @close="modal.createLabel = false"></todo-create-label>
    </vs-popup>
    <vs-popup :active.sync="modal.createProject" title="">
      <todo-create-project
        @close="modal.createProject = false"
      ></todo-create-project>
    </vs-popup>
    <div>
      <ul class="navigation__section-list">
        <li class="navigation__section-list_item">
          <router-link
            :to="{ name: 'Inbox' }"
            class="navigation__section-list_body"
          >
            <div class="navigation__section-list_title">
              <img :src="require('@/assets/icons/box.svg')" />
              <div class="nav-text">{{ $t("inbox") }}</div>
            </div>
            <div>
              <span class="navigation__section-list_task-count">{{
                $store.getters.inboxTasks.length
              }}</span>
            </div>
          </router-link>
        </li>
        <li class="navigation__section-list_item">
          <router-link
            :to="{ name: 'Today' }"
            class="navigation__section-list_body"
          >
            <div class="navigation__section-list_title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                data-v-05f19722=""
              >
                <g fill="currentColor" fill-rule="evenodd" data-v-05f19722="">
                  <path
                    fill-rule="nonzero"
                    d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                    opacity=".1"
                    data-v-05f19722=""
                    style="fill: rgb(44, 236, 23)"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                    data-v-05f19722=""
                    style="fill: rgb(44, 236, 23)"
                  ></path>
                  <text
                    font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                    font-size="9"
                    transform="translate(4 2)"
                    font-weight="500"
                    data-v-05f19722=""
                  >
                    <tspan
                      x="8"
                      y="15"
                      text-anchor="middle"
                      data-v-05f19722=""
                      style="color: rgb(44, 236, 23)"
                    >
                      {{ $moment().format("DD") }}
                    </tspan>
                  </text>
                </g>
              </svg>
              <div class="nav-text">{{ $t("today") }}</div>
            </div>
            <div>
              <span class="navigation__section-list_task-count">{{
                $store.getters.todayTasks.length
              }}</span>
            </div>
          </router-link>
        </li>
        <li class="navigation__section-list_item">
          <router-link
            class="navigation__section-list_body"
            :to="{ name: 'Upcoming' }"
          >
            <div class="navigation__section-list_title">
              <img src="@/assets/icons/calendar.svg" />
              <div class="nav-text">{{ $t("upcoming") }}</div>
            </div>
            <div>
              <span class="navigation__section-list_task-count">{{
                $store.getters.upcomingTasks.length
              }}</span>
            </div>
          </router-link>
        </li>
      </ul>
      <vs-collapse>
        <vs-collapse-item>
          <div slot="header">{{ $t("projects") }}</div>
          <div class="flex">
            <button class="btn-small my-2" @click="modal.createProject = true">
              {{ $t("addProject") }}
            </button>
          </div>
          <todo-project-list></todo-project-list>
        </vs-collapse-item>
        <vs-collapse-item>
          <div slot="header">{{ $t("labels") }}</div>
          <div class="flex">
            <button @click="modal.createLabel = true" class="btn-small my-2">
              {{ $t("addLabels") }}
            </button>
          </div>
          <todo-label-list></todo-label-list>
        </vs-collapse-item>
      </vs-collapse>
    </div>
  </nav>
</template>
<script>
import TodoCreateLabel from "./label/TodoCreateLabel.vue";
import TodoCreateProject from "./project/TodoCreateProject.vue";
import TodoLabelList from "./label/TodoLabelList.vue";
import TodoProjectList from "./project/TodoProjectList.vue";
export default {
  name: "AppNavigation",
  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    TodoCreateLabel,
    TodoLabelList,
    TodoCreateProject,
    TodoProjectList,
  },
  data: () => ({
    modal: {
      createLabel: false,
      createProject: false,
    },
  }),
};
</script>
