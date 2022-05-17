<template>
  <ul class="navigation__section-list">
    <sections-list-item
      routeName="Inbox"
      :name="$t('inbox')"
      :taskCount="$store.getters.inboxTasks.length"
    >
      <template #icon>
        <img :src="require('@/assets/icons/box.svg')" />
      </template>
    </sections-list-item>

    <sections-list-item
      routeName="Today"
      :name="$t('today')"
      :taskCount="$store.getters.todayTasks.length"
    >
      <template #icon>
        <calendar-ico :day="$moment().format('DD')"></calendar-ico>
      </template>
    </sections-list-item>

    <sections-list-item
      routeName="Upcoming"
      :name="$t('upcoming')"
      :taskCount="$store.getters.upcomingTasks.length"
    >
      <template #icon>
        <img src="@/assets/icons/calendar.svg" />
      </template>
    </sections-list-item>
  </ul>
</template>
<script>
import CalendarIco from "./CalendarIco.vue";
import SectionsListItem from "./SectionsListItem.vue";
export default {
  name: "SectionsList",
  components: {
    CalendarIco,
    SectionsListItem,
  },
};
</script>
