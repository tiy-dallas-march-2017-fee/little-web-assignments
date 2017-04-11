var chalk = require('chalk');

var weather = {

  day: 'Apr 19, 2017',
  hourlyForecast: [
    {
      hour: 0,
      chanceOfRain: 0,
      temp: 76
    },
    {
      hour: 1,
      chanceOfRain: 0,
      temp: 76
    },
    {
      hour: 2,
      chanceOfRain: 0,
      temp: 75
    },
    {
      hour: 3,
      chanceOfRain: 0,
      temp: 75
    },
    {
      hour: 4,
      chanceOfRain: 0,
      temp: 74
    },
    {
      hour: 5,
      chanceOfRain: 0,
      temp: 74
    },
    {
      hour: 6,
      chanceOfRain: 0,
      temp: 73
    },
    {
      hour: 7,
      chanceOfRain: 0,
      temp: 74
    },
    {
      hour: 8,
      chanceOfRain: 0,
      temp: 75
    },
    {
      hour: 9,
      chanceOfRain: 0,
      temp: 76
    },
    {
      hour: 10,
      chanceOfRain: 0.1,
      temp: 77
    },
    {
      hour: 11,
      chanceOfRain: 0.1,
      temp: 79
    },
    {
      hour: 12,
      chanceOfRain: 0.5,
      temp: 80
    },
    {
      hour: 13,
      chanceOfRain: 0.7,
      temp: 79
    },
    {
      hour: 14,
      chanceOfRain: 0.8,
      temp: 78
    },
    {
      hour: 15,
      chanceOfRain: 0.5,
      temp: 78
    },
    {
      hour: 16,
      chanceOfRain: 0.2,
      temp: 74
    },
    {
      hour: 17,
      chanceOfRain: 0,
      temp: 71
    },
    {
      hour: 18,
      chanceOfRain: 0,
      temp: 70
    },
    {
      hour: 19,
      chanceOfRain: 0,
      temp: 70
    },
    {
      hour: 20,
      chanceOfRain: 0,
      temp: 69
    },
    {
      hour: 21,
      chanceOfRain: 0,
      temp: 69
    },
    {
      hour: 22,
      chanceOfRain: 0,
      temp: 68
    },
    {
      hour: 23,
      chanceOfRain: 0,
      temp: 67
    }
  ]
};





function printWeather(w) {

  console.log(chalk.green('------------------------------'));
  console.log(chalk.blue('Weather for ' + w.day));
  console.log(chalk.green('------------------------------'));

  for (var i = 0; i < w.hourlyForecast.length; i++) {
    var hourNum;
    if (w.hourlyForecast[i].hour === 0) {
      console.log('12:00 Midnight');
    }
    else if (w.hourlyForecast[i].hour == 12) {
      console.log('12:00 Noon')
    }
    else if (w.hourlyForecast[i].hour < 12) {
      console.log((w.hourlyForecast[i].hour) + ':00 AM')
    }
    else {
      console.log((w.hourlyForecast[i].hour - 12) + ':00 PM')
    }

    console.log('\tChance of rain:', w.hourlyForecast[i].chanceOfRain * 100 + '%');
    console.log('\tTemp:', chalk.bgGreen(w.hourlyForecast[i].temp));
  }

}

printWeather(weather);




/* Example Output

------------------------------
Weather for Apr 19, 2017
------------------------------
12:00 Midnight
	Chance of rain: 0%
	Temp: 76
1:00 AM
	Chance of rain: 0%
	Temp: 76
2:00 AM
	Chance of rain: 0%
	Temp: 75
3:00 AM
	Chance of rain: 0%
	Temp: 75
4:00 AM
	Chance of rain: 0%
	Temp: 74
5:00 AM
	Chance of rain: 0%
	Temp: 74
6:00 AM
	Chance of rain: 0%
	Temp: 73
7:00 AM
	Chance of rain: 0%
	Temp: 74
8:00 AM
	Chance of rain: 0%
	Temp: 75
9:00 AM
	Chance of rain: 0%
	Temp: 76
10:00 AM
	Chance of rain: 10%
	Temp: 77
11:00 AM
	Chance of rain: 10%
	Temp: 79
12:00 Noon
	Chance of rain: 50%
	Temp: 80
1:00 PM
	Chance of rain: 70%
	Temp: 79
2:00 PM
	Chance of rain: 80%
	Temp: 78
3:00 PM
	Chance of rain: 50%
	Temp: 78
4:00 PM
	Chance of rain: 20%
	Temp: 74
5:00 PM
	Chance of rain: 0%
	Temp: 71
6:00 PM
	Chance of rain: 0%
	Temp: 70
7:00 PM
	Chance of rain: 0%
	Temp: 70
8:00 PM
	Chance of rain: 0%
	Temp: 69
9:00 PM
	Chance of rain: 0%
	Temp: 69
10:00 PM
	Chance of rain: 0%
	Temp: 68
11:00 PM
	Chance of rain: 0%
	Temp: 67



*/
