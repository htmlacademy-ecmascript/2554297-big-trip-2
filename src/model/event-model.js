import { EventsMock } from '../mock/eventsMocks.js';

export default class EventModel {
  events = [... EventsMock];

  getEvents() {
    return this.events;
  }
}
