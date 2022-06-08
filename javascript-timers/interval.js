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

function lyr1() {
  $h1.innerHTML = '~Driiiiiiftiiiiing, faaaaaalliiiing~';
}
setTimeout(lyr1, 6100);

function lyr2() {
  $h1.innerHTML = '~Floooatiiiing Weeeeiiiightleeeess~';
}
setTimeout(lyr2, 8425);

function lyr3() {
  $h1.innerHTML = '~Caaaaaalliiing, caaaaaalliiing hoooooooomme~';
}
setTimeout(lyr3, 10750);

function lyr4() {
  $h1.innerHTML = '&#119136';
}
setTimeout(lyr4, 14000);
