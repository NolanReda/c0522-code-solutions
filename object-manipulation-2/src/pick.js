/* exported pick */

function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if (keys.includes(key)) {
      result[key] = source[key];
    } else if (keys.includes(key) === undefined) {
      continue;
    }
  }
  return result;
}
