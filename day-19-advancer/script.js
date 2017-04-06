var previousButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var display = document.querySelector('#display');

var currentMessageIndex = 0;

var messages = [
  'You are doing a good job, Eric.',
  'You are a great teacher, despite what Nikki implies constantly',
  'You cook your steaks correctly, Eric',
  'You have good taste in soda',
  'You are taller than most, which makes you awesome',
  'Your hair is like a halo mouse-brown fire'
];

display.textContent = messages[0];



nextButton.addEventListener('click', function() {
  currentMessageIndex += 1;

  if (currentMessageIndex === messages.length) {
    currentMessageIndex = 0;
  }

  display.textContent = messages[currentMessageIndex];
});
