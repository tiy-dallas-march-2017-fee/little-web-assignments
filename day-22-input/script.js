var foods = [
  'steak',
  'nachos',
  'wings',
  'fried shrimp',
  'pizza',
  'burger'
];

var foodListOL = document.querySelector('#food-list');
var input = document.querySelector('#query');

createList(foods);

input.addEventListener('keyup', function() {
  
  var newList = [];
  for (var i = 0; i < foods.length; i++) {
    if (foods[i].indexOf(input.value) > -1) { //contains
      newList.push(foods[i]);
    }
  }

  foodListOL.innerHTML = '';

  createList(newList);
});


function createList(arr) {
  for (var i = 0; i < arr.length; i++) {
    var li = document.createElement('li');
    li.textContent = arr[i];
    foodListOL.appendChild(li);
  }
}
