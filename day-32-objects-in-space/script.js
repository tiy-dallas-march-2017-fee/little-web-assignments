

function Counter() {
  this.count = 0;
}

Counter.elementCount = 0;

Counter.prototype.createDOM = function(x, y) {

  Counter.elementCount += 1;
  console.log('How many do we have?', Counter.elementCount);

  var div = document.createElement('div');
  div.textContent = '0';
  div.style.left = x + 'px';
  div.style.top = y + 'px';

  //when someone clicks, increment count and update div text
  var self = this;
  div.addEventListener('click', function() {
    self.count += 1;
    div.textContent = self.count;
  });

  return div;
}







document.body.addEventListener('click', function(evt) {

  if (evt.target.tagName === 'DIV') {

  }
  else {
    var counter = new Counter();
    var div = counter.createDOM(evt.pageX, evt.pageY);
    document.body.appendChild(div);
  }


});
