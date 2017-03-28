var downButton = document.querySelector('#down-button');
var upButton = document.querySelector('#up-button');
var theCircle = document.querySelector('.circle');

var topValue = 0;

downButton.addEventListener('click', function() {
  topValue += 25;

  theCircle.style.top = topValue + 'px';
});

upButton.addEventListener('click', function() {
  topValue -= 25;

  theCircle.style.top = topValue + 'px';
});
