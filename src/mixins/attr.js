import each from 'utils/each';

export function attr(name, content) {
  if (!content) {
    return this.elements[0].getAttribute(name);
  }

  each(this.elements, (element) => element.setAttribute(name, content));

  return this;
}
