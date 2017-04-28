//call
//self
//bind

function Dude(name) {
  this.name = name;
}

Dude.prototype.sayMyName = function() {
  var self = this;
  setTimeout(function() {
    console.log('My name is', self.name);
  }, 0);
}

Dude.prototype.sayMyName2 = function() {

  let callback = function() {
    console.log('My name is', this.name);
  }
  setTimeout(callback.bind(this), 0);

};

let theDude = new Dude('Stevie');
theDude.sayMyName();
theDude.sayMyName2();

let otherDude = {
  name: 'Heisenberg'
};

Dude.prototype.sayMyName.call(otherDude);


Array.prototype.mySlice = function() {
  var output = [];
  for (var i = 0; i < this.length; i++) {
    output.push(this[i]);
  }
  return output;
}


function addStuff() {
  console.log('arguments', arguments);
  let args = Array.prototype.mySlice.call(arguments);
  console.log('args?', args);

  let sum = 0;
  args.forEach((x) => {
    sum += x;
  });
  return sum;
}


console.log(addStuff(6, 4, 3, 0, 87, 4));
