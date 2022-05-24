var $body = document.querySelector('body');

var $bulb = document.querySelector('.light-bulb');
var $lightOn = document.querySelector('.light');

var isOn = true;

function onOff(event) {
  if (isOn === true) {
    isOn = false;
    $body.className = 'off';
    $lightOn.className = 'light circle-off';
  } else if (isOn === false) {
    isOn = true;
    $body.className = 'on';
    $lightOn.className = 'light circle-on';
  }
}

$bulb.addEventListener('click', onOff);
