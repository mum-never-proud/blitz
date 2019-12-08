import each from '../util/each';

export const addClass = function(...classes) {
  const joinClass = classes.join(' ');
  each(this.elements, element => element.className = `${element.className} ${joinClass}`.trimLeft());

  return this;
};

export const removeClass = function(...classes) {
  each(this.elements, element => {
    let elementClasses = element.className.split(' ');

    each(classes, klass => elementClasses.splice(elementClasses.indexOf(klass), 1));
    element.className = elementClasses.join(' ');
  });

  return this;
};

export const hasClass = function(klass) {
  return this.elements[0].className.indexOf(klass) >= 0;
};

export const toggleClass = function(klass) {
  this.hasClass(klass) ? this.removeClass(klass) : this.addClass(klass);

  return this;
};
