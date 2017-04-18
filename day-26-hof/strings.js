
/*
var someStrings = ['chicken', 'rice', 'pepper', 'chickpea', 'pita', 'onion'];


someStrings.forEach(function(str) {
  console.log(str);
});

//Use filter to return all strings longer than five characters

var longerThan5 = someStrings.filter(function(x) {
  if (x.length > 5) {
    return true;
  }
});
console.log('longerThan5', longerThan5);

var longerThan5Part2 = someStrings.filter(function(x) {
  return x.length > 5;
});

console.log('longerThan5Part2', longerThan5Part2);

//Use filter to return all items that contain the letter 'e'

var containE = someStrings.filter(function(x) {
  return x.indexOf('e') > -1;
});
*/


var someStrings = ['chicken', 'rice', 'pepper', 'chickpea', 'pita', 'onion'];


// var output = ['I ate chicken.'
//   'I ate rice.'
//   'I ate pepper.'
//   'I ate chickpea.'];

var whatIAte = someStrings.map(function(x) {
  return 'I ate ' + x + '.';
})

console.log(whatIAte);
