window.FoodGame = {};

(function() {



  function Food(url, x, y, isGood) {
    this.width = 30;
    this.isGood = isGood;

    var img = document.createElement('img');
    img.obj = this;
    img.style.width = this.width + 'px';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    img.src = url;

    this.img = img;
  }

  Food.prototype.bigger = function() {
    this.width += 5;
    this.img.style.width = this.width + 'px';
  }


  var steakImages = ['steak-1.jpg', 'steak-2.jpg'];
  var brocolliImages = ['broccoli-1.jpg', 'broccoli-2.jpg', 'broccoli-3.jpg'];

  FoodGame.createRandomFood = function() {
    var x = Math.floor(Math.random() * (pantry.clientWidth - 300));
    var y = Math.floor(Math.random() * 100);
    var isGood = Math.random() < 0.5;
    var url;
    if (isGood) {
      url = steakImages[Math.floor(Math.random() * steakImages.length)];
    }
    else {
      url = brocolliImages[Math.floor(Math.random() * brocolliImages.length)];
    }

    var food = new Food(url, x, y, isGood);
    return food;
  };

})();
