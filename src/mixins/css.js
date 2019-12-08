import each from '../util/each';

const applyStyle = (element, prop, value) => {
  element.style[prop] = value;
};

export const css = function(prop, value) {
  if (typeof prop === 'string') {
    if (!value) {
      return this.elements[0].style[prop];
    }
    each(this.elements, element => applyStyle(element, prop, value));
  }
  else if (typeof prop === 'object') {
    let key;
    for (key in prop) {
      each(this.elements, element => applyStyle(element, key, prop[key]));
    }
  }

  return this;
};