<template>
  <div class="section">
    <div>
      <router-view></router-view>
    </div>
    <header class="section__header">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <vs-select
          class="selectExample"
          :label="$t('sortBy')"
          v-model="filterField"
        >
          <vs-select-item :value="null" :text="$t('withoutSorting')" />
          <vs-select-item
            v-for="(field, index) in filterFileds"
            :key="index"
            :value="field"
            :text="$t(field)"
          />
        </vs-select>
      </div>
    </header>
    <div>
      <slot name="body" :filter="filterField"></slot>
    </div>
    <div>
      <todo-add-collapse :label="labelID"></todo-add-collapse>
    </div>
  </div>
</template>
<script>
import TodoAddCollapse from "./task/TodoAddCollapse.vue";
export default {
  components: {
    TodoAddCollapse,
  },
  props: {
    filterFileds: {
      type: Array,
      required: false,
      defult: [],
    },
  },
  data: () => ({
    filterField: null,
  }),
  computed: {
    labelID() {
      if (this.$route.name != "Label") {
        return null;
      }
      return this.$route.params.labelID;
    },
  },
};
</script>
