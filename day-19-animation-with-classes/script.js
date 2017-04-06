var link = document.querySelector('#link');
var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');

var positionX = 0;
var positionY = -650;

window.addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);
  if (evt.keyCode === 37) {
    positionY = -650;
  }
  else if (evt.keyCode === 39) {
    positionY = -910;
  }
});


stopButton.addEventListener('click', function() {
  console.log('stop', intervalId);
  clearInterval(intervalId);
});

startButton.addEventListener('click', function() {
  intervalId = setInterval(animate, 50);
});



var position = 0;

function animate() {

  link.classList.remove('position-' + position);
  position += 1;

  if (position === 5) {
    position = 1;
  }

  link.classList.add('position-' + position);
}


var intervalId = setInterval(animate, 50);
