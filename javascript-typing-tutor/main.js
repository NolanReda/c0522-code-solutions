var $letters = document.querySelectorAll('span');

function keyPress(event) {
  for (let i = 0; i < $letters.length; i++) {
    if (KeyboardEvent === $letters[i]) {
      $letters[i].className = 'green';
      $letters[i + 1].className = 'border-bottom';
    }
  }
}

$letters.addEventListener('keydown', keyPress);

// console.log(keyPress());
