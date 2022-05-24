// need to query select effected HTML elements(#openModal, #modal, .survey-button)
// create 2 functions.
// first function used to show the modal in the browser page
// second to close modal
// need to add event listener to activate the opening funciton when the button with the opening ID attribute
// ----> gets clicked
// add second event listener to close the modal when button inside the modal is clicked.

var $openModal = document.querySelector('#openModal');
var $modal = document.querySelector('#modal');
var $no = document.querySelector('.survey-button');

function open(event) {
  $modal.showModal();
}

function close(event) {
  $modal.close();
}

$openModal.addEventListener('click', open);

$no.addEventListener('click', close);
