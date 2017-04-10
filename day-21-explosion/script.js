var thing = document.querySelector('.thing');


var column = 0;
var row = 0;
var size = 128;

var xPosition = 0;
var yPosition = 0;

var intervalId = setInterval(function() {

  xPosition = column * size * -1;
  yPosition = row * size * -1;

  thing.style.backgroundPositionX = xPosition + 'px';
  thing.style.backgroundPositionY = yPosition + 'px';

  column += 1;

  if (column === 8) {
    column = 0;
    row += 1;
  }
  if (row === 8) {
    column = 0;
    row = 0;
  }

}, 50);
