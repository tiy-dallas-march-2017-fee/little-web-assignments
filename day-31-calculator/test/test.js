var assert = require('assert');

var Calculator = {
  add: function(input) {
    if(input.indexOf(',') >= 0 || input.indexOf('\n') >= 0) {

      var units = input.split(/[\n,]+/);

      var sum = 0;
      units.forEach(function(x) {
        sum += Number(x);
      });
      return sum;
    }

    return Number(input);
  }
}

describe('String Calculator add method', function() {
  it('should return 0 when the value is a blank string', function() {
    var result = Calculator.add('');

    assert.equal(0, result);
  });

  it('should return 3 when the value passed in is 3', function() {
    var result = Calculator.add('3');

    assert.equal(3, result);
  });

  it('should return 5 when the value passed in is "2,3"', function() {
    var result = Calculator.add('2,3');

    assert.equal(5, result);
  });

  it('should return 10 when the value passed in is "5,5"', function() {
    var result = Calculator.add('5,5');

    assert.equal(10, result);
  });

  it('should return 42 when the value passed in is "5,5,10,12,10"', function() {
    var result = Calculator.add('5,5,10,12,10');

    assert.equal(42, result);
  });

  it('should return 6 when the value passed in is "1\n2,3"', function() {
    var result = Calculator.add('1\n2,3');

    assert.equal(6, result);
  });

});
