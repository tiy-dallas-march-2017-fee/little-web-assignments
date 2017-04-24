(function() {
  var pantry = document.querySelector('#pantry');
  var scoreboard = document.querySelector('#score');
  var messaging = document.querySelector('#messaging');

  var browserIsVisible = true;
  document.addEventListener("visibilitychange", function(evt) {
    browserIsVisible = !document.hidden;
  });

  var foods = [];
  var score = 0;

  setInterval(function() {
    if (!browserIsVisible) {
      return;
    }

    var food = new FoodGame.createRandomFood();
    pantry.appendChild(food.img);
    foods.push(food);

  }, 1000);

  setInterval(function() {
    if (!browserIsVisible) {
      return;
    }

    for (var i = foods.length - 1; i > -1; i--) {
      var food = foods[i];
      food.bigger();

      if (food.width > 200) {
        pantry.removeChild(food.img);
        foods.splice(i, 1);

        if (food.isGood) {
          score += 10;
        }
        else {
          score -= 10;
        }
        scoreUpdated();
      }
    }

  }, 50);

  pantry.addEventListener('click', function(evt) {

    if (evt.target.tagName === 'IMG') {
      var index = foods.indexOf(evt.target.obj);
      var food = foods.splice(index, 1)[0];
      pantry.removeChild(evt.target);

      if (food.isGood) {
        score -= 10;
        scoreUpdated();
      }

      console.log('x', evt.pageX, evt.target.offsetLeft);

      var x = evt.clientX - 64;
      var y = evt.clientY - 174; //This is a hacks

      var explosion = new FoodGame.Explosion(x, y);
      pantry.appendChild(explosion.div);
      explosion.start();
    }

  });

  function scoreUpdated() {

    if (score >= 0 && score < 50) {
      scoreboard.classList.remove('doing-badly');
      scoreboard.classList.remove('doing-well');
      messaging.textContent = 'You are doing fine I guess.'
    }
    else if (score <= -10) {
      scoreboard.classList.add('doing-badly');
      messaging.textContent = 'Mediocre.'
    }
    else if (score === 50) {
      scoreboard.classList.add('doing-well');
      messaging.textContent = 'You know what you are doing when it comes to food.'
    }

    scoreboard.textContent = score;
  }


  //
  // var explosion1 = new FoodGame.Explosion(100, 100);
  // pantry.appendChild(explosion1.div);
  // explosion1.start();
  //
  //
  // setTimeout(function() {
  //   var explosion2 = new FoodGame.Explosion(300, 100);
  //   pantry.appendChild(explosion2.div);
  //   explosion2.start();
  //
  // }, 500);




})();
