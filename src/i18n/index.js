import Vue from "vue";
import VueI18n from "vue-i18n";
import locales from "./locales/index.js";
import userService from "../services/user.js";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: userService.getData.locale,
  messages: locales,
});

function getLocalesList() {
  const result = [];
  for (let locale in locales) {
    result.push(locale);
  }
  return result;
}

function changeLocale(newLocale) {
  userService.changeLocale(newLocale);
  i18n.locale = newLocale;
}

const localesList = getLocalesList();

export { localesList, i18n, changeLocale };
