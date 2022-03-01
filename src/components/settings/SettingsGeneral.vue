<template>
  <div>
    <vs-select class="selectExample" :label="$t('language')" v-model="locale">
      <vs-select-item
        :key="index"
        :value="item"
        :text="item"
        v-for="(item, index) in locales"
      />
    </vs-select>
  </div>
</template>
<script>
import userService from "../../services/user.js";
import { localesList, changeLocale } from "../../i18n/index.js";

export default {
  data: () => ({
    locale: null,
  }),
  computed: {
    locales() {
      return localesList;
    },
  },
  created() {
    this.locale = userService.getData.locale;
  },
  watch: {
    locale(newLocale, oldLocale) {
      if (oldLocale == null) {
        return;
      }
      changeLocale(newLocale);
    },
  },
};
</script>
