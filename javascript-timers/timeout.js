var $message = document.querySelector('h1');

function timer() {
  $message.innerHTML = 'Hello There';
}

setTimeout(timer, 2000);
