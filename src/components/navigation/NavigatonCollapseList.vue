<template>
  <vs-collapse>
    <navigation-collapse-list-item :title="$t('projects')">
      <template #button>
        <button class="btn-small my-2" @click="openModal('createProject')">
          {{ $t("addProject") }}
        </button>
      </template>
      <template #list>
        <todo-project-list></todo-project-list>
      </template>
    </navigation-collapse-list-item>
    <navigation-collapse-list-item :title="$t('labels')">
      <template #button>
        <button class="btn-small my-2" @click="openModal('createLabel')">
          {{ $t("addLabels") }}
        </button>
      </template>
      <template #list>
        <todo-label-list></todo-label-list>
      </template>
    </navigation-collapse-list-item>
  </vs-collapse>
</template>
<script>
import NavigationCollapseListItem from "./NavigationCollapseListItem.vue";
import TodoLabelList from "../label/TodoLabelList.vue";
import TodoProjectList from "../project/TodoProjectList.vue";

export default {
  name: "NavigationCollapseList",
  components: {
    NavigationCollapseListItem,
    TodoLabelList,
    TodoProjectList,
  },
  methods: {
    openModal(name) {
      this.$emit("openModal", name);
    },
  },
};
</script>
