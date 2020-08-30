import each from '../util/each';
import normalizeCollection from '../util/normalize-collection';

const eachReverse = (collection, callback) => {
  const normalizedCollection = normalizeCollection(collection);
  let i = normalizedCollection.length - 1;

  for (; i >= 0; i -= 1) {
    if (callback(normalizedCollection[i], i) === false) {
      break;
    }
  }
};

export function prepend(element) {
  if (typeof element === 'string') {
    each(this.elements, (targetElement) => targetElement.insertAdjacentHTML('afterbegin', element));
  } else if (element.nodeType) {
    each(this.elements, (targetElement) => {
      targetElement.insertBefore(element, targetElement.firstChild);
    });
  } else {
    eachReverse(element, prepend.bind(this));
  }

  return this;
}

export function append(element) {
  if (typeof element === 'string') {
    each(this.elements, (targetElement) => targetElement.insertAdjacentHTML('beforeend', element));
  } else if (element.nodeType) {
    each(this.elements, (targetElement) => targetElement.appendChild(element));
  } else {
    each(element, append.bind(this));
  }

  return this;
}

export function before(element) {
  if (typeof element === 'string') {
    each(this.elements, (targetElement) => targetElement.insertAdjacentHTML('beforebegin', element));
  } else if (element.nodeType) {
    each(this.elements, (targetElement) => {
      targetElement.parentNode.insertBefore(element, targetElement);
    });
  } else {
    each(element, before.bind(this));
  }

  return this;
}

export function after(element) {
  if (typeof element === 'string') {
    each(this.elements, (targetElement) => targetElement.insertAdjacentHTML('afterend', element));
  } else if (element.nodeType) {
    each(this.elements, (targetElement) => {
      targetElement.parentNode.insertBefore(element, targetElement.nextSibling);
    });
  } else {
    eachReverse(element, after.bind(this));
  }

  return this;
}

export function remove() {
  eachReverse(this.elements, (element) => element.remove());

  return this;
}

export function children() {
  return this.elements[0].children;
}

export function childNodes() {
  return this.elements[0].childNodes;
}

export function contains(targetElement) {
  return this.elements[0].contains(targetElement);
}

export function eq(n) {
  this.prevElements = this.elements;
  this.elements = [this.elements[n] || this.elements[0]];

  return this;
}
