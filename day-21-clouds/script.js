var cloudHolder = document.querySelector('#clouds')

var maxNumberOfClouds = 4;

//We will keep track of our clouds in here.
var clouds = [];

var spritePositions = [
  { x: 0, y: 0 },
  { x: -230, y: 0 },
  { x: -430, y: 0 },
  { x: 0, y: -250 },
  { x: -230, y: -250 },
  { x: -430, y: -250 },
  { x: 0, y: -470 },
  { x: -230, y: -470 },
  { x: -430, y: -470 }
];

function cloudCreator() {
  //We don't want too many clouds!
  if (clouds.length === maxNumberOfClouds) {
    return;
  }

  //We will create the div we want in code.
  var div = document.createElement('div');
  div.classList.add('cloud');

  var rand = Math.random();
  if (rand > 0.8) { //Only create a cloud 20% of the time

    //We don't want all the clouds to be at the same y position
    var yPosition = (Math.floor(Math.random() * 300));
    div.style.top = yPosition + 'px';

    //Pick a random sprite position for a diff image.
    var spritePosition = Math.floor(Math.random() * spritePositions.length);
    div.style.backgroundPositionX = spritePositions[spritePosition].x + 'px';
    div.style.backgroundPositionY = spritePositions[spritePosition].y + 'px';
    div.style.left = cloudHolder.clientWidth + 'px';

    //Will look cooler if the clouds move at different speeds
    var speed = Math.ceil(Math.random() * 10);

    //This object holds our pertinent info, div and x location
    clouds.push({
      div: div,
      speed: speed,
      x: cloudHolder.clientWidth
    });

    //Have to add that div to the page
    cloudHolder.appendChild(div);
  }
}

function moveClouds() {
  // console.log('how many?', clouds.length);
  for (var i = clouds.length - 1; i > -1; i--) {
    //The cloud is off the screen. Remove and go to the next iteration
    if (clouds[i].x < -200) {
      cloudHolder.removeChild(clouds[i].div);
      clouds.splice(i, 1);
      continue;
    }

    clouds[i].x -= clouds[i].speed;
    clouds[i].div.style.left = clouds[i].x + 'px';

  }
}

setInterval(cloudCreator, 1000);

setInterval(moveClouds, 50);
