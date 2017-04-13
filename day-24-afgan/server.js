var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/api/popdata', function(req, res) {

  fs.readFile('afganistan-population-un.csv', 'utf-8', function(err, data) {

    var lines = data.split('\n');

    var pops = [];

    for (var i = 1; i < lines.length - 1; i++) {
      var values = lines[i].split(',');

      var year = values[1].replace('"', '').replace('"', '');
      var pop = values[3].replace('"', '').replace('"', '');

      pops.push({
        year: year,
        population: pop
      });
    }

    res.send({
      values: pops
    });

  });




});

app.listen(2945, function() {
  console.log('Listening on port 2945.');
});
