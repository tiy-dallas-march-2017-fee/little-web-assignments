var counter = 0;

var button = document.querySelector('#play-or-pause');
var display = document.querySelector('#display');

var intervalId;

button.addEventListener('click', function() {

  if (intervalId === undefined) {
    intervalId = setInterval(function() {
      counter++;
      display.textContent = counter;
    }, 50);
    button.textContent = 'stop';
  }
  else {
    clearInterval(intervalId);
    intervalId = undefined;
    button.textContent = 'play';
  }


});
