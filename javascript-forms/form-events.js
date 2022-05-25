function handleFocus(event) {
  console.log('focus was fired');
  console.log('event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur was fired');
  console.log('event target name:', event.target.name);
}

function handleInput(event) {
  console.log('event target name:', event.target.name);
  console.log('event target value:', event.target.value);
}

var $email = document.querySelector('input#user-email');
var $userName = document.querySelector('input#user-name');
var $message = document.querySelector('textarea#user-message');

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
