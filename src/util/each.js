export default function(collection, callback) {
  let i = 0;

  for (; i < collection.length; i++) {
    if (callback(collection[i], i) === false) {
      break;
    }
  }
};
