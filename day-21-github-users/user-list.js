var thatOL = document.querySelector('ol');
var detailsDiv = document.querySelector('#details');
var template = document.querySelector('#list-template').innerHTML;
var detailsTemplate = document.querySelector('#detail-template').innerHTML;

var ajaxData;

$.ajax({
  url: 'https://api.github.com/search/users?q=bananas'
})
.done(function(data) {

  ajaxData = data;

  var html = '';

  for (var i = 0; i < data.items.length; i++) {

    var rowClass = 'even';
    if (i % 2 === 1) {
      rowClass = 'odd';
    }

    html += Mustache.render(template, {
      index: i,
      item: data.items[i],
      rowClass: rowClass
    });
  }
  thatOL.innerHTML = html;
});

thatOL.addEventListener('click', function(evt) {
  var index = Number(evt.target.getAttribute('data-index'));
  console.log(ajaxData.items[index]);

  var html = Mustache.render(detailsTemplate, ajaxData.items[index]);
  console.log(html);

  detailsDiv.innerHTML = html;

});
