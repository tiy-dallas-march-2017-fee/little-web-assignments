var nums = [5, 12, 9, 1, 18];

var strs = ['pizza', 'bacon', 'car', 'Samson'];

// var shuffled = [];
// while (nums.length > 0) {
//   var randomIndex = Math.floor(Math.random() * nums.length);
//   shuffled.push(nums[randomIndex]);
//   nums.splice(randomIndex, 1);
// }


//console.log('shuffled', shuffled);

function shuffle(arr) {
  //do stuff
  //return shuffled thing
}


Array.prototype.shuffle = function() {
//nums.shuffle = function() {

  var copy = this.slice(0);
  var shuffled = [];
  while (copy.length > 0) {
    var randomIndex = Math.floor(Math.random() * copy.length);
    shuffled.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }

  return shuffled;
}

var shuffled = nums.shuffle();
//console.log('shuffled', shuffled);

var shuffledStrings = strs.shuffle();
//console.log('shuffled strings', shuffledStrings);





function Animal(name) {
  this.name = name;
}

Animal.prototype.makeNoise = function() {
  console.log(this.name + ' goes "grrrrrrrrrrrr".');
}

Animal.prototype.breath = function() {
  console.log(this.name + ' is breathing.');
}

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();

Cat.prototype.makeNoise = function() {
  console.log(this.name + ' goes "meow".');
}

Cat.prototype.attemptToMurderOwner = function() {
  console.log(this.name + ' attempts to eat owner, and just successfully infects body part.');
}


var fido = new Dog('Fido');
fido.numberOfLegs = 4;
fido.makeNoise();

var spot = new Dog('Spot');
spot.makeNoise();
spot.breath();

var b = new Cat('B');
b.makeNoise();
b.breath();
b.attemptToMurderOwner();
