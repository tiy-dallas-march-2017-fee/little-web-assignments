//
// var first = document.querySelector('.first');
// first.addEventListener('click', function() {
//   first.classList.toggle('on');
// });
//
// var second = document.querySelector('.second');
// second.addEventListener('click', function() {
//   second.classList.toggle('on');
// });
//
// var third = document.querySelector('.third');
// third.addEventListener('click', function() {
//   third.classList.toggle('on');
// });
//
// var fourth = document.querySelector('.fourth');
// fourth.addEventListener('click', function() {
//   fourth.classList.toggle('on');
// });
//
// var fifth = document.querySelector('.fifth');
// fifth.addEventListener('click', function() {
//   fifth.classList.toggle('on');
// });


// var li;
//
// var allTheLIs = document.querySelectorAll('li');
//
// for (var i = 0; i < allTheLIs.length; i++) {
//
//   li = allTheLIs[i];
//   li.addEventListener('click', function(evt) {
//     evt.target.classList.toggle('on');
//   });
// }




var theButton = document.querySelector('#add-thing');
var ol = document.querySelector('ol');



ol.addEventListener('click', function(evt) {
  console.log('bubbling', evt);
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('on');
  }
});

ol.addEventListener('click', function(evt) {
  console.log('capturing lol');
}, true);




theButton.addEventListener('click', function() {
  var newLI = document.createElement('li');
  newLI.textContent = 'new';
  ol.appendChild(newLI);

});
