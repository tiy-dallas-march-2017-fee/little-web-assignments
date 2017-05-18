const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api/data', function (req, res) {
  fs.readFile(__dirname + '/data.csv', 'utf-8', function(err, data) {

    const lines = data.split('\n');

    const output = [];

    for(var i = 1; i < lines.length - 1; i++) {
      const line = lines[i].split(',');
      output.push({
        date: line[0],
        product: line[1],
        violation: line[2],
        firm: line[3]
      });
    }

    res.send({
      violations: output
    });

  })

});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
