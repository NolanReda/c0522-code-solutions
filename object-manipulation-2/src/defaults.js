/* exported defaults */

function defaults(target, source) {
  if (source !== {}) {
    var returnTarget = Object.assign(target, source);
  }
  return returnTarget;
}
