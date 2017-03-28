var stuff = [1, 6, 90, 45];

var sum = 0;

for (var i = 0; i < stuff.length; i++) {
  sum = sum + stuff[i];
  console.log('hello');
}

var theDiv = document.querySelector('#put-stuff-here');
var theMessage = 'The sum is ' + sum + '.';
theDiv.textContent = theMessage;
