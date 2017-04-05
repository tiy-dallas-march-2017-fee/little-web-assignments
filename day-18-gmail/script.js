


var theList = document.querySelector('ol');

theList.addEventListener('click', function(evt) {

  var previouslySelected = document.querySelector('.selected');
  if (previouslySelected !== null) {
    previouslySelected.classList.remove('selected');
  }

  if (evt.target.tagName === 'LI') {
    evt.target.classList.add('selected');
  }


});
