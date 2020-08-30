import each from 'utils/each';

export function addClass(...classes) {
  each(this.elements, (element) => {
    const oldClasses = element.className.split(' ');

    each(classes, (klass) => {
      if (!oldClasses.includes(klass)) {
        oldClasses.push(klass);
      }
    });

    element.className = oldClasses.join(' ').trim();
  });

  return this;
}

export function removeClass(...classes) {
  each(this.elements, (element) => {
    const elementClasses = element.className.split(' ');

    element.className = elementClasses.filter((elementClass) => !classes.includes(elementClass)).join(' ').trim();
  });

  return this;
}

export function hasClass(klass) {
  return this.elements[0].className.indexOf(klass) >= 0;
}

export function toggleClass(klass) {
  if (this.hasClass(klass)) {
    this.removeClass(klass);
  } else {
    this.addClass(klass);
  }

  return this;
}
