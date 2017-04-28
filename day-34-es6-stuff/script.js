'use strict';
//let
//const
//arrow functions
//classes
const arr = [9, 20, 6, 7, 2];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  sum += arr[i];
}

//console.log(sum);

//Old-school function
// var sentences = arr.map(function(x) {
//   return 'I like the number ' + x + '.';
// });

//remove unnecessary function keyword
// var sentences = arr.map((x) => {
//   return 'I like the number ' + x + '.';
// });

var sentences = arr.map((x) => 'I like the number ' + x + '.');

var sentences2 = arr.map((x) => {
  if (x >= 20) {
    return 'I do not like big numbers like ' + x;
  }

  return 'I sure like ' + x;
});

var something = () => { console.log('hi'); }



//Kickin' it old school

function Character(name, classType) {
  this.name = name;
  this.classType = classType;
  this.inventory = [];
}

Character.prototype.calculateACBonus = function() {
  var bonus = 0;
  this.inventory.forEach((x) => {
    if (x.acBonus !== null) {
      bonus += x.acBonus;
    }
  })
  return bonus;
}



// New School

class Character2 {
  constructor(name, classType) {
    this.name = name;
    this.classType = classType;
    this.inventory = [];
  }

  calculateACBonus() {
    var bonus = 0;
    this.inventory.forEach((x) => {
      if (x.acBonus !== null) {
        bonus += x.acBonus;
      }
    })
    return bonus;
  }
}

function ItemOld(name, damage, acBonus) {
  this.name = name;
  this.damage = damage;
  this.acBonus = acBonus;
}

class Item {
  constructor(name, damage, acBonus) {
    this.name = name;
    this.damage = damage;
    this.acBonus = acBonus;
  }
}

var nikki = new Character('Nikki the Malevolent', 'Mage Warrior Princess');
nikki.inventory.push(new Item('Flower of Poisoning', '2d4', 2));
nikki.inventory.push(new Item('Light Light Armor', null, 15));
console.log(nikki, nikki.calculateACBonus());

console.log('================')

var eric = new Character2('Wharborg the Destructor', 'Troll Mage Extraordinaire');
eric.inventory.push(new Item('Axe of Total Destruction', '4d20', null));
eric.inventory.push({
  name: 'Magic Shorts',
  damage: null,
  acBonus: 5
});

console.log(eric, eric.calculateACBonus());
