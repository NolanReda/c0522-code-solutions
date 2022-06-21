/* exported titleCase */

function titleCase(title) {
  var split = title.split(' ');
  var capArray = [];
  for (let i = 0; i < split.length; i++) {
    var cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    if (split[i].toLowerCase() === 'javascript') {
      cap = 'JavaScript';
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
    capArray.push(cap);
    var colon = capArray.join(' ').split(':');
    // console.log(colon[1]);
    var afterColon = colon[1].charAt(0).toUpperCase() + colon[1].substring(1, colon[1].length.toLowerCase());
    afterColon.join(': ');
    // console.log(afterColon);
  }
  return afterColon;
}
