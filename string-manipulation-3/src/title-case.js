/* exported titleCase */

function titleCase(title) {
  var capArray = [];
  var split = title.split(' ');
  for (let i = 0; i < split.length; i++) {
    var cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    if (split[i].toLowerCase() === 'javascript') {
      cap = 'JavaScript';
    } else if (split[i].toLowerCase() === 'javascript:') {
      cap = 'JavaScript:';
    }
    if (split[i].toLowerCase() === 'api') {
      cap = 'API';
    }
    if (split[i].toLowerCase() === 'and' || split[i].toLowerCase() === 'or' ||
      split[i].toLowerCase() === 'to' || split[i].toLowerCase() === 'the' || split[i].toLowerCase() === 'of' ||
      split[i].toLowerCase() === 'for' || split[i].toLowerCase() === 'an' ||
      split[i].toLowerCase() === 'in' || split[i].toLowerCase() === 'on') {
      cap = split[i].toLowerCase();
    }
    if (i === 0) {
      cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    }
    capArray.push(cap);
    var newString = capArray.join(' ');
    var strArr = newString.split('');
    var nextArr = [];
    for (let s = 0; s < strArr.length; s++) {
      var cap2 = strArr[s];
      if (strArr[s - 1] === '-') {
        cap2 = strArr[s].toUpperCase();
      }
      if (strArr[s - 2] === ':') {
        cap2 = strArr[s].toUpperCase();
      }
      nextArr.push(cap2);
    }
    var anotherStr = nextArr.join('');
  }
  return anotherStr;
}
