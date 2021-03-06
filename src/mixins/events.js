import each from 'utils/each';
import { addEvent, removeEvent } from 'utils/event-manager';

export function on(eventName, callback) {
  each(this.elements, (element) => addEvent(element, eventName, callback));

  return this;
}

export function off(eventName, callback) {
  each(this.elements, (element) => removeEvent(element.$beid$, eventName, callback));

  return this;
}
