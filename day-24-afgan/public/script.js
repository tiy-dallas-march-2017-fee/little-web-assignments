var tbody = document.querySelector('tbody');


$.ajax({
  url: '/api/popdata'
})
.done(function(data) {
  console.log('Did I get anything?', data);

  for (var i = 0; i < data.values.length; i++) {
    var tr = document.createElement('tr');

    var yearTD = document.createElement('td');
    yearTD.textContent = data.values[i].year;

    var popTD = document.createElement('td');
    popTD.textContent = data.values[i].population;

    tr.appendChild(yearTD);
    tr.appendChild(popTD);

    tbody.appendChild(tr);
  }


});
