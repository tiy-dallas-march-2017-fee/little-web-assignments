var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var clearButton = document.querySelector('#clear');
var submitButton = document.querySelector('#submit');
var errorz = document.querySelector('#error-messaging');

clearButton.addEventListener('click', function(evt) {
  console.log('clearing');
  evt.preventDefault();

  firstNameInput.value = '';
  lastNameInput.value = '';
});

submitButton.addEventListener('click', function(evt) {
  console.log('submitting');
  //Code for checking validity here
  if (firstNameInput.value === '' || lastNameInput.value === '') {
    console.log('preventing');
    errorz.textContent = 'You are a failure at life.';
    errorz.style.display = 'block';
    evt.preventDefault();
  }
  else {
    console.log('clearly not preventing anything')
  }
});
