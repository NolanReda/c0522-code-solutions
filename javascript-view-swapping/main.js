var $tabContainer = document.querySelector('.tab-container');
var $allTabs = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $allTabs.length; i++) {
      if ($allTabs[i] === event.target) {
        $allTabs[i].className = 'tab active';
      } else if ($allTabs[i] !== event.target.className) {
        $allTabs[i].className = 'tab';
      }
      var $dataView = event.target.getAttribute('data-view');
      for (let e = 0; e < $allView.length; e++) {
        if ($allView[e].getAttribute('data-view') === event.target.getAttribute('data-view')) {
          $allView[e].className = 'view';
        } else if ($allView[e].getAttribute($dataView) !== event.target.$dataView) {
          $allView[e].className = 'view hidden';
        }
      }
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
