

var theSVG = document.querySelector('svg');
var theList = document.querySelector('ol');

theSVG.addEventListener('click', function() {
  theList.classList.toggle('hidden');
  theSVG.classList.toggle('flipped');
});
