



var listOfUsers = document.querySelector('#list-of-users');
var searchQuery = document.querySelector('#search-query');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('#previous-button');

var page = 1;
var totalResults;
var pageCount;



function makeAjaxCall() {
  listOfUsers.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + searchQuery.value + '&page=' + page
  });


  promise.done(function(data) {

    totalResults = data.total_count;
    pageCount = Math.ceil(totalResults / 30);

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


    if (page === 1) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline';
    }

    if (page >= pageCount) {
      nextButton.style.display = 'none';
    }
    else {
      nextButton.style.display = 'inline';
    }


  });
}


searchQuery.addEventListener('keyup', function(evt) {

  if (evt.keyCode !== 13) {
    return;
  }

  makeAjaxCall();
});

nextButton.addEventListener('click', function() {
  //increment number
  page += 1;
  //do ajax call again
  makeAjaxCall();
});

previousButton.addEventListener('click', function() {
  page -= 1;
  makeAjaxCall();
});
