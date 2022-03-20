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
  </div>
</template>
<script>
export default {
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
  methods: {
    getParams(routeName, paramField) {
      if (this.$route.name != routeName) {
        return null;
      }
      return this.$route.params[paramField];
    },
  },
};
</script>
