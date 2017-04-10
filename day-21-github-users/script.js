


var promise = $.ajax({
  url: 'https://api.github.com/search/users?q=steak'
});

var listOfUsers = document.querySelector('#list-of-users');

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
