import React from 'react';
import './chuck-norris.css';

class RandomChuckNorris extends React.Component {

  constructor() {
    super();

    this.state = {
      jokes: [
        'Chuck eats chick-fil-a on Sunday.',
        'It took Chuck Norris 1/2 a lick to get to the center of a tootsie pop.',
        'Chuck Norris is the reason Ninjas hide.',
        'Pedro voted for Chuck Norris.',
        'Chuck Norris won an arm wrestling match with both hands tied behind his back.'
      ],
      jokeNumber: 0
    }
  }

  getNewJoke() {
    var rand =Math.floor(Math.random() * this.state.jokes.length);
    this.setState({
      jokeNumber: rand
    });
  }

  render() {
    return (<div className="chuck-norris">
      <div>{this.state.jokes[this.state.jokeNumber]}</div>
      <button onClick={() => this.getNewJoke()}>Get New Joke</button>
    </div>);
  }

}

module.exports = RandomChuckNorris;
