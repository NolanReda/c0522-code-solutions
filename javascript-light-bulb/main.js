// need to query select from the elements that will be effected by the changing light effect(div with bulb in it and background color of body)
// create a new variable with boolean value to serve as a "lightswitch"
// create a new function to test which state the boolean is in and edit the class values of
// the effected HTML elements to match the CSS selectors with the correct color rules applied to them.
// add an event listener to the 'lightbulb' to activate the new function when clicked

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
