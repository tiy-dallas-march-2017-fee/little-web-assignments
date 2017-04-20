(function() {

  var userList = document.querySelector('#user-list');

  $.ajax({
    url: 'https://api.github.com/search/users?q=capybara'
  })
  .done(function(data) {

    data.items.forEach(function(user) {
      var li = document.createElement('li');
      li.textContent = user.login;
      li.setAttribute('data-repos', user.repos_url);
      userList.appendChild(li);
    });

  });

  userList.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
      var repoUrl = evt.target.getAttribute('data-repos');

      //We have a url! I am going to send that to repo list!
      GithubApp.loadThemRepos(repoUrl);
    }
  });



})();
