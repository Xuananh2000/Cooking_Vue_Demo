import Vue from 'vue';

class EventBusService extends Vue {
  SHOW_HEADER_PAGE = 'SHOW_HEADER_PAGE'
}

export const eventBusService = new EventBusService();