const fs = require('fs');
const request = require('request');

const fileContents = fs.readFileSync('data.csv', 'utf-8');

const lines = fileContents.split('\n');

for (var i = 1; i < lines.length - 1; i++) {
  const pieces = lines[i].split(',');

  //send data
  request.post('http://localhost:5000/api/book', {
    form: {
      title: pieces[0],
      author: pieces[1]
    }
  });

}
