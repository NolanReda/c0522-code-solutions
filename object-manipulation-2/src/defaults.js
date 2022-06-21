/* exported defaults */

// loop through propertys of source object
// if current property doesn't yet exist in the target object
// assign it to target from source
// return target object

function defaults(target, source) {
  for (var keys in source) {
    if (!Object.hasOwn(target, keys)) {
      target[keys] = source[keys];
    }
  }
  return target;
}
