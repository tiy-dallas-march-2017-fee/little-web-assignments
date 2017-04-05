var mainNav = document.querySelector('#main-nav');

var navHasBackground = false;

window.addEventListener('scroll', function() {

  if (window.scrollY > 400 && navHasBackground === false) {
    mainNav.classList.add('opaque');
    navHasBackground = true;
  }
  else if (window.scrollY < 400 && navHasBackground === true) {
    mainNav.classList.remove('opaque');
    navHasBackground = false;
  }


});
