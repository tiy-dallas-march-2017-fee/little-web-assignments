var clickMeButton = document.querySelector('#click-me');
var countDisplay = document.querySelector('#count-display');

var clickCount = 0;

clickMeButton.addEventListener('click', function() {
  clickCount++;

  countDisplay.textContent = 'You clicked ' + clickCount + ' times.';
  //You clicked 7 times
});






var addToListButton = document.querySelector('#add-to-list');
var listOfStuff = document.querySelector('#list-of-stuff');


addToListButton.addEventListener('click', function() {

  // var currentHTML = listOfStuff.innerHTML;
  // currentHTML += '<li>steak</li>';
  // listOfStuff.innerHTML = currentHTML;

  var newItem = document.createElement('li');
  newItem.textContent = 'steak';
  newItem.classList.add('tasty');
  listOfStuff.appendChild(newItem);

});




var favoriteFoodsList = document.querySelector('#favorite-foods');

var foods = ['steak', 'shrimp', 'wings', 'nachos', 'smoked brisket'];

for (var i = 0; i < foods.length; i++) {
  var li = document.createElement('li');
  li.textContent = foods[i];
  favoriteFoodsList.appendChild(li);
}







var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];

var bookInfoList = document.querySelector('#book-info');

var totalPages = 0;

for (var i = 0; i < books.length; i++) {

  var li = document.createElement('li');
  li.textContent = books[i].name + ' (' + books[i].author + ' - ' + books[i].pageCount + ' pages)';
  bookInfoList.appendChild(li);

  totalPages += books[i].pageCount;
}

var avgDisplay = document.querySelector('#page-count-avg');
avgDisplay.textContent = 'Average pages: ' + totalPages / books.length;
