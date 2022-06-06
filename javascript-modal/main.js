var $hideShadow = document.querySelector('.none');
var $button = document.querySelector('.button');
var $survey = document.querySelector('.survey-button');

var openClose = true;

function openModal(event) {
  if (openClose === true) {
    openClose = false;
    $hideShadow.className = 'shadow';
  } else if (openClose === false) {
    openClose = true;
    $hideShadow.className = 'none';
  }
}

$button.addEventListener('click', openModal);
$survey.addEventListener('click', openModal);
