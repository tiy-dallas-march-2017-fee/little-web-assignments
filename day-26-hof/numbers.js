
// var numbers = [1, 56, 89, 12, 45, 211, 45, 56, 32];


//Old school looping
function loopAndConsoleLog(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//loopAndConsoleLog(numbers);

//Or, you can use the forEach function on arrays to do that.
// numbers.forEach(function(num) {
//   console.log(num);
// });



//This is how you make forEach

/*

function forEvery(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}



forEvery(numbers, function(num) {
  console.log(num);
});

numbers.forEach(function(num) {
  console.log(num);
})l



function logName(name) {
  console.log('Hi', name);
}

forEvery(['Bob', 'Frank'], logName);
*/




//All the numbers over 50
/*
var output = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    output.push(numbers[i]);
  }
}
*/


//
// function filter(arr, func) {
//   var filterOutput = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       filterOutput.push(arr[i]);
//     }
//   }
//   return filterOutput;
// }
//
//
//
// var over50 = filter(numbers, function(num) {
//   return num > 50;
// });
//
// var lessThanOrEqualTo50 = filter(number, function(num) {
//   return num <= 50;
// });











//
//
// var output = numbers.filter(function(num) {
//   console.log('third?', third);
//   if (i % 2 === 0) {
//     return false;
//   }
//   else {
//     return true;
//   }
// });
//
// console.log(output);







//
// var bigger = numbers.map(function(x) {
//   return x + 100;
// });
//
// console.log('bigger', bigger);
//
// var lis = numbers.map(function(x) {
//   return '<li>' + x + '</li>';
// });
// console.log('list items', lis);



var numbers = [1, 56, 89, 12, 45, 211, 45, 56, 32];

var count = 0;

numbers.sort(function(a, b) {
  count += 1;
  if (a > b) {
    return true;
  }
  else {
    return false;
  }
});

console.log('numbers?', numbers, count);
