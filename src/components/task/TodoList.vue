<template>
  <div class="task-list">
    <div v-if="title || editMode" class="task-list__header">
      <div class="task-list__header-content">
        <div
          @click="isOpen = !isOpen"
          class=""
          :class="{
            'task-list__dropdown_active': isOpen,
            'task-list__dropdown': !isOpen,
          }"
        >
          <svg width="24" height="24" class="task-list__dropdown-svg">
            <path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path>
          </svg>
        </div>
        <h2 class="list-section-title">{{ title }}</h2>
        <span class="task-list__task-count" v-if="taskList.length > 0">{{
          taskList.length
        }}</span>
      </div>
      <div v-if="changeable">
        <div class="task__menu-base-btns" @click.stop>
          <div class="task__menu-base-btns-item">
            <button @click="editMode = true">
              <svg width="24" height="24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                  ></path>
                </g>
              </svg>
            </button>
            <span class="task__menu-base-btns-item-tooltiptext">{{
              $t("edit")
            }}</span>
          </div>
          <div class="task__menu-base-btns-item">
            <button @click="$emit('delete')">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <rect
                    width="14"
                    height="1"
                    x="5"
                    y="6"
                    fill="currentColor"
                    rx=".5"
                  ></rect>
                  <path
                    fill="currentColor"
                    d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"
                  ></path>
                </g>
              </svg>
            </button>
            <span class="task__menu-base-btns-item-tooltiptext">Delete</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="editMode">
      <vs-input placeholder="Name" v-model="newName" />
      <div class="mt-3 mb-3">
        <vs-button
          color="primary"
          type="filled"
          class="mr-3"
          @click="renameSection"
          >Save</vs-button
        >
        <vs-button color="danger" type="flat" @click="editMode = false"
          >Cancel</vs-button
        >
      </div>
    </div>
    <hr />
    <ul
      v-if="isOpen && taskList.length > 0"
      :class="{ 'pl-6 mt-4': title != '' }"
    >
      <draggable
        handle=".task__menu-handler"
        ghost-class="task-ghost"
        :animation="300"
        v-model="taskList"
      >
        <transition-group type="transition" name="flip-list">
          <li v-for="task in taskList" :key="task._id">
            <todo-task :taskData="task"></todo-task>
          </li>
        </transition-group>
      </draggable>
    </ul>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import TodoTask from "./TodoTask.vue";
import draggable from "vuedraggable";
import {
  setSubsequence,
  getSubsequence,
} from "../../services/taskSubsequence.js";
import { mapActions } from "vuex";

export default {
  components: {
    TodoTask,
    draggable,
  },
  data() {
    return {
      tasksTemp: getSubsequence(this.tasks),
      isOpen: true,
      editMode: false,
      newName: "",
    };
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    filter: {
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    changeable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    tasks(newList) {
      this.tasksTemp = newList;
    },
  },
  methods: {
    ...mapActions(["renameSection"]),
    renameSection() {
      if (this.newName == "") {
        return;
      }

      this.$emit("rename", this.newName);
      this.newName = "";
      this.editMode = false;
    },
    sortTasks(tasks, filter) {
      if (filter == null) {
        return tasks;
      }

      tasks.sort((a, b) => {
        if (typeof a[filter] != typeof b[filter]) {
          return 0;
        }

        switch (typeof a[filter]) {
          case "number":
            return b[filter] - a[filter];
          case "string":
            if (a[filter] < b[filter]) {
              return -1;
            }
            if (a[filter] > b[filter]) {
              return 1;
            }
            return;
          default:
            return 0;
        }
      });

      return tasks;
    },
  },
  computed: {
    taskList: {
      get() {
        return this.sortTasks(getSubsequence(this.tasksTemp), this.filter);
      },
      set(newList) {
        this.tasksTemp = setSubsequence(newList);
      },
    },
  },
};
</script>
