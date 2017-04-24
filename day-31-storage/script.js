var clickMe = document.querySelector('#click-me');

var count = Number(localStorage.getItem('click-count'));
clickMe.innerHTML = count;

clickMe.addEventListener('click', function() {
  count += 1;
  localStorage.setItem('click-count', count);
  clickMe.innerHTML = count;
});



document.cookie = 'goodFood=burger';


//localStorage.setItem('key', 'value')
//localStorage.getItem('key');
