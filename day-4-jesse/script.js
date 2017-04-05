var mainNav = document.querySelector('#main-nav');

window.addEventListener('scroll', function() {

  if (window.scrollY > 400) {
    mainNav.classList.add('opaque');
  }
  else {
    mainNav.classList.remove('opaque');
  }


});
