var $img = document.querySelector('img');
var $dot = document.querySelectorAll('.dot');
var $chev1 = document.querySelector('#chev1');
var $chev2 = document.querySelector('#chev2');
var $dotRow = document.querySelector('.dots');

var images = [
  {
    imageURL: 'images/bane.jpg',
    alt: 'Darth-Bane',
    dotID: 'd1',
    count: 0
  },
  {
    imageURL: 'images/revan.jpg',
    alt: 'Darth-Revan',
    dotID: 'd2',
    count: 1
  },
  {
    imageURL: 'images/nihilus.jpeg',
    alt: 'Darth-Nihilus',
    dotID: 'd3',
    count: 2
  },
  {
    imageURL: 'images/naga-sadow.jpg',
    alt: 'Naga-Sadow',
    dotID: 'd4',
    count: 3
  }
];

var counter = 0;

function imgSwap() {
  if (counter === images.length - 1) {
    counter = 0;
    $img.setAttribute('src', images[counter].imageURL);
    $img.setAttribute('alt', images[counter].alt);
    $dot[counter].setAttribute('class', 'dot fas fa-circle marg-5');
    $dot[images.length - 1].setAttribute('class', 'dot far fa-circle marg-5');
  } else {
    counter++;
    $img.setAttribute('src', images[counter].imageURL);
    $img.setAttribute('alt', images[counter].alt);
    $dot[counter].setAttribute('class', 'dot fas fa-circle marg-5');
    $dot[counter - 1].setAttribute('class', 'dot far fa-circle marg-5');
  }
}

function nextSwap(event) {
  imgSwap();
  clearInterval(startCounter);
  startCounter = setInterval(imgSwap, 3000);
}

function prevSwap(event) {
  if (counter === 0) {
    counter = images.length - 1;
    $img.setAttribute('src', images[counter].imageURL);
    $img.setAttribute('alt', images[counter].alt);
    $dot[counter].setAttribute('class', 'dot fas fa-circle marg-5');
    $dot[0].setAttribute('class', 'dot far fa-circle marg-5');
  } else {
    counter--;
    $img.setAttribute('src', images[counter].imageURL);
    $img.setAttribute('alt', images[counter].alt);
    $dot[counter].setAttribute('class', 'dot fas fa-circle marg-5');
    $dot[counter + 1].setAttribute('class', 'dot far fa-circle marg-5');
  }
  clearInterval(startCounter);
  startCounter = setInterval(imgSwap, 3000);
}

function dotClick(event) {
  for (let c = 0; c < $dot.length; c++) {
    if ($dot[c].className === 'dot fas fa-circle marg-5') {
      $dot[c].className = 'dot far fa-circle marg-5';
    }
  }
  if (event.target.className === 'dot far fa-circle marg-5') {
    event.target.setAttribute('class', 'dot fas fa-circle marg-5');
    for (let i = 0; i < images.length; i++) {
      if (images[i].dotID === event.target.id) {
        $img.setAttribute('src', images[i].imageURL);
        $img.setAttribute('alt', images[i].alt);
        counter = images[i].count;
      }
    }
  }
  clearInterval(startCounter);
  startCounter = setInterval(imgSwap, 3000);
}

var startCounter = setInterval(imgSwap, 3000);
$chev2.addEventListener('click', nextSwap);
$chev1.addEventListener('click', prevSwap);
$dotRow.addEventListener('click', dotClick);
