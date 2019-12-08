import each from '../util/each';

export function val(content) {
  if (!content) {
    return this.elements[0].value;
  }

  each(this.elements, element => element.value = content);

  return this;
};
