var letters = 'fjkhdfashlafdshlkfadsioahesifhhjkvhjkfdajkhhfashjk';
var dict = {};

for (var i = 0; i < letters.length; i++) {
  var letter = letters[i];

  if (dict[letter] === undefined) {
    dict[letter] = 1;
  }
  else {
    dict[letter] += 1;
  }
}



console.log(dict);
