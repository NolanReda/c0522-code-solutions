/* exported defaults */

function defaults(target, source) {
  for (var keys in source) {
    if (!Object.hasOwn(target, keys)) {
      target[keys] = source[keys];
    }
  }
  return target;
}
