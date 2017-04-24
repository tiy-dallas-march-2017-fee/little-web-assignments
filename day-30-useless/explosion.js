
(function() {

  function Explosion(x, y) {
    this.div = document.createElement('div');
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
    this.div.classList.add('explosion');
    this.row = 0;
    this.column = 0;
  }

  Explosion.prototype.start = function() {
    var self = this;
    this.intervalId = setInterval(function() {
      console.log('row', self.row, 'column', self.column);

      if (self.column === 3 && self.row === 3) {
        clearInterval(self.intervalId);
        self.div.style.display = 'none';
      }
      else if (self.column === 3) { //go to next row
        self.row += 1;
        self.column = 0;
      }
      else {
        self.column += 1;
      }


      self.div.style.backgroundPositionX = (self.column * 128 * -1) + 'px';
      self.div.style.backgroundPositionY = (self.row * 128 * -1) + 'px';

    }, 1000);
  }


  FoodGame.Explosion = Explosion;

})();
