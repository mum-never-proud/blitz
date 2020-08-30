import normalizeCollection from 'utils/normalize-collection';

export default function querySelector(selector, context = document) {
  const simpleSelector = /^[.#]?[\w-]*$/g;
  let elements = [];

  if (simpleSelector.test(selector)) {
    if (selector[0] === '#') {
      const element = context.getElementById(selector.slice(1));

      if (element) {
        elements.push(element);
      }
    } else if (selector[0] === '.') {
      elements = normalizeCollection(context.getElementsByClassName(selector.slice(1)));
    } else {
      elements = normalizeCollection(context.getElementsByTagName(selector));
    }
  } else if (selector instanceof HTMLCollection) {
    elements = normalizeCollection(selector);
  } else if (selector.nodeType) {
    elements = [selector];
  } else {
    elements = normalizeCollection(context.querySelectorAll(selector));
  }

  return elements;
}
