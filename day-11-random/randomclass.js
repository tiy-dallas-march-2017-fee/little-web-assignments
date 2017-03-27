var peeps = ['Stevie', 'Ali', 'Haley', 'Monica', 'Nikki', 'Sam', 'Brian', 'David'];

// var randomNumber = Math.random();
// randomNumber = randomNumber * peeps.length;
// randomNumber = Math.floor(randomNumber);
//
// console.log(randomNumber, peeps[randomNumber]);


var randomPeeps = [];
var totalCount = peeps.length;

for (var i = 0; i < totalCount; i++) {

  var randomNumber = Math.random();
  randomNumber = randomNumber * peeps.length;
  randomNumber = Math.floor(randomNumber);

  var person = peeps.splice(randomNumber, 1);
  randomPeeps.push(person);
}
console.log(randomPeeps);


//The while loop version
/*
while (peeps.length > 0) {
  var randomNumber = Math.random();
  randomNumber = randomNumber * peeps.length;
  randomNumber = Math.floor(randomNumber);

  randomPeeps.push(peeps[randomNumber]);
  peeps.splice(randomNumber, 1);
}
*/
