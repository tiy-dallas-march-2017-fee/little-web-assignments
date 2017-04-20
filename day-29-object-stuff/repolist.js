(function() {

  var repoList = document.querySelector('#repo-list');

  function loadThemRepos(url) {
    console.log('going to load this url, lol.', url);

    repoList.innerHTML = '';

    $.ajax({
      url: url
    })
    .done(function(data) {

      if (data.length === 0) {
        alert('No repos');
      }
      else {
        data.forEach(function(repo) {
          var li = document.createElement('li');
          li.textContent = repo.name;
          repoList.appendChild(li);
        });

      }


    });
  }

  GithubApp.loadThemRepos = loadThemRepos;

})();
