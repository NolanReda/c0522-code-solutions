var $contact = document.querySelector('#contact-form');
var messageData = {
  name: null,
  email: null,
  message: null
};

function handleSubmit(event) {
  console.log('submit fired');
  event.preventDefault();
  messageData.name = $contact.elements.name.value;
  messageData.email = $contact.elements.email.value;
  messageData.message = $contact.elements.message.value;
  console.log('messageData:', messageData);
  $contact.reset();
}

$contact.addEventListener('submit', handleSubmit);
