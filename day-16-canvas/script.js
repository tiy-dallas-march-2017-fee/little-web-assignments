var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

console.log(context);


//
// context.fillStyle = '#00F';
// context.fillRect(20, 50, 40, 200);
//
// context.fillStyle = '#0F0';
// context.fillRect(120, 100, 40, 150);
//
// context.fillStyle = '#F00';
// context.fillRect(220, 150, 40, 100);



//
// context.beginPath();
// context.moveTo(50, 50);
// context.lineTo(200, 60);
// context.lineTo(150, 90);
//
// context.stroke();
//
// context.fillStyle = '#F00';
//
// context.fill();


context.beginPath();

context.arc(200, 200, 50, 1, (Math.PI * 2) - 1);
context.lineTo(200, 200);

context.fill();






var fighterImage = document.querySelector('#fighter');


var pixelsLeft = 50,
    pixelsTop = 50,
    spriteWidth = 50,
    spriteHeight = 50,
    canvasPosX = 400,
    canvasPosY = 200,
    outputSize = 50;

context.drawImage(fighterImage,
  pixelsLeft,
  pixelsTop,
  spriteWidth,
  spriteHeight,
  canvasPosX,
  canvasPosY,
  outputSize,
  outputSize
);
