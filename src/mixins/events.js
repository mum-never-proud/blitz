import each from "../util/each";
import eventStore from '../priv-data/event-store';

// let eventStore = {};

// const removeEventFromStore = event => {
//   let combinedEvents = [];

//   if (eventStore[event]) {
//     combinedEvents = combinedEvents.concat(eventStore[event]);
//     eventStore[event].length = 0;
//   }
//   else {
//     let _event;

//     for (_event in eventStore) {
//       combinedEvents = combinedEvents.concat(eventStore[_event]);
//       eventStore[_event].length = 0;
//     }
//   }

//   return combinedEvents;
// };

export function on(eventType, callback) {
  each(this.elements, element => element.addEventListener(eventType, callback));

  (eventStore[eventType] = eventStore[eventType] || []).push(callback);

  return this;
};

export function off(first, second) {
  const callbacks = eventStore[first];

  if (typeof second === 'function') {
    each(this.elements, element => element.removeEventListener(first, second));
    callbacks.splice(callbacks.indexOf(first));
  }
  else if (callbacks) {
    each(this.elements, element => removeEventListeners(element, first, callbacks));
  }
  else {
    each(this.elements, element => {
      let event;

      for (event in eventStore) { removeEventListeners(element, event, eventStore[event]); }
    });
  }

  return this;
};

const removeEventListeners = (element, eventType, callbacks) => {
  let callback;

  while (callback = callbacks.pop()) {
    element.removeEventListener(eventType, callback);
  }
};
