const isArray = obj => obj.constructor.name === 'Array';

function extend(target, ...sources) {
  let prop;

  if (typeof target === 'string') {
    throw Error('target not a valid object');
  }

  if (sources.length) {
    sources.forEach(source => {
      for (prop in source) {
        target[prop] = source[prop];
      }
    });

    return target;
  }
  else {
    const args = isArray(target) ?  target : [target];

    return extend(this.fn, ...args);
  }
}

export default extend;
