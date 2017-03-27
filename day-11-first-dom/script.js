


//querySelector will grab the first thing it matches
var theParagraph = document.querySelector('p');
console.log(theParagraph);
//Changing the text!
theParagraph.textContent = 'PANTS';


//Get another thing
var theSecond = document.querySelector('#second-yo');
//Change the text on it too
theSecond.textContent = 'I am already hungry.';

//Get the list
var theOL = document.querySelector('ol');
//You can get its children
console.log('the children', theOL.children);

//Replace the html inside with this.
theOL.innerHTML = '<li>lol</li>';

//Get the first LI
var anLI = document.querySelector('li');
//You can get its parents
console.log('the li has a parent', anLI.parentElement);


//querySelectorAll will grab all the things it matches
var allThePs = document.querySelectorAll('p');
console.log(allThePs);
