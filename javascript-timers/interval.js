var $h1 = document.querySelector('h1');
var countdown = 4;

function interval() {
  if (countdown === 1) {
    $h1.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(timerID);
  } else {
    countdown--;
    $h1.innerHTML = countdown;
  }
}

var timerID = setInterval(interval, 775);
