var fs = require('fs');

// var sortedList = [];
//
// sortedList.push({ el: 'day-21-pants', order: 1 });
// sortedList.push({ el: 'day-22-cantaloupe', order: 2 });
// sortedList.push({ el: 'day-23-steak', order: 3 });
// sortedList.push({ el: 'day-23-freight-car', order: 4 });
// sortedList.push({ el: 'day-24-uncle', order: 5 });
//
// var output = '<!DOCTYPE html>\n<html>\n<body>\n<ul>';
//
//
// sortedList.forEach(function(thing) {
//   output += '<li>' + thing.el + '</li>\n'
// });
//
// output += '</ul>\n</body></html>';
//
// fs.writeFileSync('wat.html', output, 'utf-8');

var projectList = fs.readdirSync('/Users/ericsowell/Dev/tiy/mar-2017/little-web-assignments/day-30-create-file');

console.log('projectList', projectList);

projectList.forEach(function(x) {

  var result = fs.lstatSync(x).isDirectory();
  console.log(x, result);

});
