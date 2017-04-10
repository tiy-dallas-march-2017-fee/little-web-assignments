var promise = $.ajax({
  url: 'https://swapi.co/api/people'
});

var peopleList = document.querySelector('#people-list');

promise.done(function(data) {
  console.log('got the data!', data);
  console.log('count', data.count);
  console.log('results', data.results);

  for (var i = 0; i < data.results.length; i++) {
    var anLI = document.createElement('li');

    // anLI.innerHTML = '<h2>'+ data.results[i].name + '</h2>'
    // + '<div>gender: ' + data.results[i].gender + '</div>'
    // + '<div>hair color: ' + data.results[i].hair_color + '</div>';


    var nameH2 = document.createElement('h2');
    nameH2.textContent = data.results[i].name;
    anLI.appendChild(nameH2);

    var genderDiv = document.createElement('div');
    genderDiv.textContent = data.results[i].gender;
    anLI.appendChild(genderDiv);

    var hairColorDiv = document.createElement('div');
    hairColorDiv.textContent = data.results[i].hair_color;
    anLI.appendChild(hairColorDiv);

    peopleList.appendChild(anLI);
  }

});
