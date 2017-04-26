var saveItButton = document.querySelector('button');

var maleButton = document.querySelector('#male');
var femaleButton = document.querySelector('#female');
var naButton = document.querySelector('#na');
var genderRadios = document.querySelectorAll('input[type="radio"]');


var selectedGender = localStorage.getItem('gender');
for (var i = 0; i < genderRadios.length; i++) {
  if (genderRadios[i].id === selectedGender) {
    genderRadios[i].checked = true;
    break;
  }
}

/* Or the slightly longer way
if (selectedGender === 'male') {
  maleButton.checked = true;
}
else if (selectedGender === 'female') {
  femaleButton.checked = true;
}
else if (selectedGender === 'na') {
  naButton.checked = true;
}
*/

saveItButton.addEventListener('click', function() {

  for (var i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      localStorage.setItem('gender', genderRadios[i].id);
      break;
    }
  }
  //
  //
  // if (maleButton.checked) {
  //   console.log('male');
  //   localStorage.setItem('gender', 'male');
  // }
  // else if (femaleButton.checked) {
  //   console.log('female');
  //   localStorage.setItem('gender', 'female');
  // }
  // else if (naButton.checked) {
  //   console.log('na')
  //   localStorage.setItem('gender', 'na');
  // }
  // else {
  //   console.log('nothing');
  // }



});
