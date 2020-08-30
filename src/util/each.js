export default function each(collection, callback) {
  let i = 0;

  for (; i < collection.length; i += 1) {
    if (callback(collection[i], i) === false) {
      break;
    }
  }
}
