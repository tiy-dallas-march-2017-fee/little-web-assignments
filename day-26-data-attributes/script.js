var clickMe = document.querySelector('#click-me');
var swapiPeopleOL = document.querySelector('#swapi-people');
var listItemTemplateText = document.querySelector('#list-item-template').innerHTML;
var detailsDiv = document.querySelector('#details');
var detailTemplate = document.querySelector('#detail-template').innerHTML;
var spinner = document.querySelector('#spinner');

clickMe.addEventListener('click', function() {
  var att = clickMe.getAttribute('data-id');
  alert(att);
});


var ajaxData;

$.ajax({
  url: 'http://swapi.co/api/people'
})
.done(function(data) {
  console.log(data);
  ajaxData = data;

  var html = '';
  for (var i = 0; i < data.results.length; i++) {

    html += Mustache.render(listItemTemplateText, {
      index: i,
      name: data.results[i].name
    });

    // Regular DOM manipulation
    // var li = document.createElement('li');
    // li.setAttribute('data-index', i);
    // li.textContent = data.results[i].name;
    //
    // swapiPeopleOL.appendChild(li);

  }

  spinner.style.display = 'none';
  swapiPeopleOL.innerHTML = html;
});

swapiPeopleOL.addEventListener('click', function(evt) {

  if (evt.target.tagName === 'LI') {
    var index = evt.target.getAttribute('data-index');
    console.log('you got index', index)

    var person = ajaxData.results[index];
    console.log('person', person);

    var html = Mustache.render(detailTemplate, person);
    console.log(html);
    detailsDiv.innerHTML = html;
  }

});
