function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $doubeClick = document.querySelector('.double-click-button');
$doubeClick.addEventListener('dblclick', handleDoubleClick);
