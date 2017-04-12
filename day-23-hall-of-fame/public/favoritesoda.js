var sodaListOL = document.querySelector('#soda-list');

$.ajax({
  url: '/api/favoritesoda'
})
.done(function(data) {
  for (var i = 0; i < data.sodas.length; i++) {
    var li = document.createElement('li');
    li.textContent = data.sodas[i];
    sodaListOL.appendChild(li);
  }
});
