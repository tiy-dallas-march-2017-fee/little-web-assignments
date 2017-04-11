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

input.addEventListener('keyup', function(evt) {

  console.log(evt.keyCode);

  //filter only when you hit the enter key
  if (evt.keyCode !== 13) {
    return;
  }

  var newList = [];
  for (var i = 0; i < foods.length; i++) {

    var containsLetter = foods[i].indexOf(input.value) > -1;
    if (containsLetter) {
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
