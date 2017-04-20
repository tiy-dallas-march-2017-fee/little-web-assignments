(function() {

  function Counter(selector, count) {
    this.el = document.querySelector(selector);
    this.count = count;

    var self = this;
    this.el.addEventListener('click', function() {
      self.count += 1;
      self.render();
    });
  }

  Counter.prototype.render = function() {
    this.el.textContent = 'Current count: ' + this.count;
  }


  var counter1 = new Counter('#counter', 0);
  var counter2 = new Counter('#counter-2', 3);
  var counter3 = new Counter('#counter-3', 20);


  counter1.render();
  counter2.render();
  counter3.render();

  console.log('counter', counter1);
  console.log('counter 2', counter2);

})();
