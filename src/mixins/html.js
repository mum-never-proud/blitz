import each from '../util/each';

export function html(content) {
  if (!content) {
    return this.elements[0].innerHTML;
  }

  each(this.elements, (element) => {
    element.innerHTML = content;
  });

  return this;
}
