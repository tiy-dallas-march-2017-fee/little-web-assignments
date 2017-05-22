const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.use(bodyParser.urlencoded({extended: false}));


let fileData;

app.get('/api/authors', function(req, res) {

  if (fileData !== undefined) {
    console.log('sending cached version');
    res.send(fileData);
    return;
  }

  fs.readFile('authors.csv', 'utf-8', function(err, data) {
    console.log('parsing file')

    const lines = data.split('\n');

    const objects = [];
    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i];
      const pieces = line.split(',');

      objects.push({
        name: pieces[0],
        language: pieces[1],
        publishedWorks: pieces[4]
      });
    }

    fileData = objects;

    res.send(objects);

  });
})


var pretendDatabase = [];

app.post('/api/book', function(req, res) {

  console.log(req.body);

  pretendDatabase.push(req.body);

  console.log('In your database, you have ', pretendDatabase);


  res.send('you sent stuff');
});

app.get('/api/books', function(req, res) {
  res.send(pretendDatabase);
});





// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
