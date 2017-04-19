

function myLog() {
  var arr = Array.prototype.slice.call(arguments, 0);
  arr.forEach(function(x) {
    console.log(x);
  })
}

myLog('hello', 'Monica');


function addAllTheThings() {
  console.log(typeof arguments);

  var arr = Array.prototype.slice.call(arguments);
  console.log('slice output?', arr);

  var sum = 0;
  arr.forEach(function(x) {
    sum += x;
  });

  return sum;
}


var sum = addAllTheThings(1, 5, 6, 10, 500, 34, 89, 19);
console.log('sum', sum);





Array.prototype.copyThis = function() {
  var output = [];

  for (var i = 0; i < this.length; i++) {
    output.push(this[i]);
  }

  return output;
};
