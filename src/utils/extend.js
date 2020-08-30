import each from 'utils/each';

function extend(target, ...sources) {
  if (typeof target === 'string') {
    throw Error('target not a valid object');
  }

  if (sources.length) {
    sources.forEach((source) => {
      each(Object.keys(source), (prop) => {
        target[prop] = source[prop];
      });
    });

    return target;
  }

  const args = Array.isArray(target) ? target : [target];

  return extend(this, ...args);
}

export default extend;
