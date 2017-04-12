var fs = require('fs');

fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {
  var lines = data.split('\r\n');

  var output = [];

  for (var i = 1; i < lines.length - 1; i++) {
    var values = lines[i].split(',');

    var person = values[0];
    var year = values[1];
    var votes = values[5];

    output.push({
      personId: person,
      year: year,
      votes: votes
    });

  }

  console.log(output);
});
