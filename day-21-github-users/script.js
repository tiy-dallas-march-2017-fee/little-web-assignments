



var listOfUsers = document.querySelector('#list-of-users');
var searchQuery = document.querySelector('#search-query');


searchQuery.addEventListener('keyup', function(evt) {

  if (evt.keyCode !== 13) {
    return;
  }

  listOfUsers.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + searchQuery.value
  });


  promise.done(function(data) {

    for (var i = 0; i < data.items.length; i++) {
      var li = document.createElement('li');

      var img = document.createElement('img');
      img.src = data.items[i].avatar_url;
      li.appendChild(img);

      var a = document.createElement('a');
      a.href = data.items[i].html_url;
      a.target = '_blank';
      a.textContent = data.items[i].login;

      li.appendChild(a);

      listOfUsers.appendChild(li);
    }

  });


});
