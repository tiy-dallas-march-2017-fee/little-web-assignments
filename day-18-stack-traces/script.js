
//
// function f1() {
//   var a = 8;
//   f2();
// }
//
// function f2() {
//   errorYo //there is an error here
//   f3();
// }
//
// function f3() {
// }
//
// f1();











function f1() {
  var result = f2();
}

function f2() {
  var a = 7;

  f4();

  var result = f3(a);
  return result;
}

function f3(parm) {
//  errorYo; //there is an error here
  //console.log('hello');
  //errorYo;
  return "salad";
}

function f4() {
  console.trace();
}

f1();
