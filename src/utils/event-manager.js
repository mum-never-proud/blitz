import each from 'utils/each';
import events from 'constants/events';
import eventStore from 'priv-data/event-store';

let uid = 1;

export default function attachListeners() {
  each(events, (eventName) => {
    document.addEventListener(eventName, (e) => {
      const elementBucket = eventStore[e.target.$beid$] || {};
      const eventBucket = elementBucket[e.type] || [];

      each(eventBucket, (callback) => callback(e));
    });
  });
}

export function addEvent(ele, eventName, callback) {
  ele.$beid$ = ele.$beid$ || uid;
  uid += 1;
  eventStore[ele.$beid$] = eventStore[ele.$beid$] || {};

  (eventStore[ele.$beid$][eventName] = eventStore[ele.$beid$][eventName] || []).push(callback);
}

export function removeEvent(elementBucketID, eventName, callback) {
  const elementBucket = eventStore[elementBucketID] || {};
  const eventBucket = elementBucket[eventName] || [];

  if (typeof eventName === 'string') {
    if (typeof callback === 'function') {
      each(eventBucket, (registeredCallback, i) => {
        if (registeredCallback.toString() === callback.toString()) {
          eventBucket.splice(i, 1);
        }
      });
    } else if (callback === undefined) {
      eventBucket.length = 0;
    }
  } else if (eventName === undefined) {
    eventStore[elementBucketID] = {};
  }
}
