var fs = require('fs');

//This is the synchronous example

var fileData = fs.readFileSync('authors.csv', 'utf-8');
var lines = fileData.split('\n');
// console.log(lines);

for (var i = 1; i < lines.length - 1; i++) {
  var line = lines[i];
  var pieces = line.split(',');

  if (Number(pieces[3]) - Number(pieces[2]) > 60) {
    console.log('name -', pieces[0]);
  }

}


console.log('-----------------------------------------');


fs.readFile('authors.csv', 'utf-8', function(err, data) {
  // console.log('async err', err);
  // console.log('async data', data);

  var lines = data.split('\n');
  // console.log('lines', lines);

  for (var i = 1; i < lines.length - 1; i++) {
    var line = lines[i];
    var pieces = line.split(',');

    if (Number(pieces[3]) - Number(pieces[2]) > 60) {
      console.log('name -', pieces[0]);
    }

  }
});
