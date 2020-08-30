import each from '../util/each';

const applyStyle = (element, prop, value) => {
  element.style[prop] = value;
};

export function css(prop, value) {
  if (typeof prop === 'string') {
    if (!value) {
      return this.elements[0].style[prop];
    }

    each(this.elements, (element) => applyStyle(element, prop, value));
  } else if (typeof prop === 'object') {
    each(Object.keys(prop), (propName) => {
      each(this.elements, (element) => applyStyle(element, propName, prop[propName]));
    });
  }

  return this;
}
