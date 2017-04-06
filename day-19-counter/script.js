var downButton = document.querySelector('#down-button');
var upButton = document.querySelector('#up-button');
var display = document.querySelector('#display');

var counter = 0;

display.textContent = counter;

downButton.addEventListener('click', function() {
  if (counter > 0) {
    counter -= 1;
    display.textContent = counter;    
  }
});

upButton.addEventListener('click', function() {
  counter += 1;
  display.textContent = counter;
});
