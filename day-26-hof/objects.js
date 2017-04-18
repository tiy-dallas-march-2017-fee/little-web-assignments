var peeps = [
  { firstName: 'Jane', lastName: 'Jones', age: 12 },
  { firstName: 'John', lastName: 'Smith', age: 18 },
  { firstName: 'Fred', lastName: 'Johnson', age: 11 },
  { firstName: 'Jaime', lastName: 'Oliver', age: 9 },
  { firstName: 'Ragan', lastName: 'Perkinson', age: 1 },
  { firstName: 'Chris', lastName: 'Smith', age: 5 },
  { firstName: 'George', lastName: 'Jungle', age: 17 },
  { firstName: 'Mike', lastName: 'Tyson', age: 16 },
  { firstName: 'Jimmy', lastName: 'Smith', age: 21 },
  { firstName: 'Chris', lastName: 'Thompson', age: 17 }
];


// peeps.forEach(function(x) {
//   console.log(x.firstName);
// });


var youngerThan15 = peeps.filter(function(x) {
  return x.age < 15;
});

//console.log('younger than 15', youngerThan15);

var fifteenAndOlder = peeps.filter(function(x) {
  return x.age >= 15;
});

//console.log('fifteen and older', fifteenAndOlder);


var chrisPeople = peeps.filter(function(x) {
  return x.firstName === 'Chris';
});

//console.log('Chris', chrisPeople);


var iFirstNamePeople = peeps.filter(function(x) {
  return x.firstName.indexOf('i') !== -1;
});

//console.log('has i', iFirstNamePeople);


var firstNamesOnly = peeps.map(function(x) {
  return x.firstName;
});

//console.log('first names only', firstNamesOnly);


var fullNames = [];
fullNames.forEach(function(x) {
  fullNames.push(x.firstName + ' ' + x.lastName);
});


var fullNames = peeps.map(function(x) {
  return x.firstName + ' ' + x.lastName;
});

//console.log('full names', fullNames);

var objectsWithFullNames = peeps.map(function(x) {
  // x.fullName = x.firstName + ' ' + x.lastName;
  // return x;
  return {
    firstName: x.firstName,
    lastName: x.lastName,
    fullName: x.firstName + ' ' + x.lastName,
    age: x.age
  };
});

// console.log('objects with full names', objectsWithFullNames);
// console.log('-------------------------');
// console.log('original', peeps);


function sortCopy(arr) {
  return arr.slice(0).sort();
}

var orig = [1, 6, 9, 2, 8];

var sorted = sortCopy(orig);

console.log(sorted, orig);
