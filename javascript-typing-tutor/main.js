var $letters = document.querySelectorAll('span');
var currentLetter = 0;

function keyPress(event) {
  if (event.key === $letters[currentLetter].innerHTML) {
    currentLetter++;
    $letters[currentLetter - 1].className = 'green';
    $letters[currentLetter].className = 'border-bottom';
  } else if (event.key !== $letters[currentLetter].innerHTML) {
    $letters[currentLetter].className = 'red';
  }
}

document.addEventListener('keydown', keyPress);
