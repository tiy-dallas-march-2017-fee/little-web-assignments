var specialDiv = document.querySelector('#special-div');

var isHidden = false;

window.addEventListener('scroll', function(evt) {
  //console.log(window.scrollY);

  if (window.scrollY > 1000 && isHidden === false) {
    console.log('hiding!');
    specialDiv.style.display = 'none';
    isHidden = true;
  }
  else if (window.scrollY <= 1000 && isHidden === true) {
    console.log('showing!');
    specialDiv.style.display = 'block';
    isHidden = false;
  }

});



window.addEventListener('resize', function() {
  console.log('resizing');
});
