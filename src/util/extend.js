export default (target, ...sources) => {
  let prop;

  sources.forEach(source => {
    for (prop in source) {
      target[prop] = source[prop];
    }
  });

  return target;
};
