<template>
  <UCard>
    <FullCalendar :options="calendarOptions" />
  </UCard>
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import thailand from "@fullcalendar/core/locales/th";

export default {
  components: {
    FullCalendar,
  },
  data: () => ({
    calendarOptions: {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      height: "auto",
      locale: thailand,
    },
  }),
};
</script>
