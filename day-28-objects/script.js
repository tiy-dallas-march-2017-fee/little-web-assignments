function View(selector) {
  this.el = document.querySelector(selector);
}

View.prototype.text = function(txt) {
  this.el.textContent = txt;
  console.log('what is this?', this);
}

View.prototype.hide = function() {
  this.el.style.display = 'none';
}

View.prototype.show = function() {
  this.el.style.display = 'block';
}

View.prototype.click = function(func) {
  var self = this;
  console.log('this out', this);
  this.el.addEventListener('click', function() {
    console.log('this in?', this);
    func.call(self);
  });

}


var aDiv = new View('#a-div');
aDiv.text('I have text!');
aDiv.click(function() {
  this.text('Changing me too!');
});

var anotherDiv = new View('#another-div');
anotherDiv.text('I also have text!');

anotherDiv.click(function() {
  this.text('I clicked on it.');
})
