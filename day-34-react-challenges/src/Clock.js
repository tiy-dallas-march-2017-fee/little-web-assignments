import React from 'react';
import './clock.css';

class Clock extends React.Component {

  constructor() {
    super();

    this.state = {
      currentTime: new Date()
    }

    setInterval(() => {
      this.setState({
        currentTime: new Date()
      });
    }, 1000);
  }

  render() {
    var seconds = this.state.currentTime.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    var minute = this.state.currentTime.getMinutes();
    if (minute < 10) {
      minute = '0' + minute;
    }

    return (
      <div className="clock">
        {this.state.currentTime.getHours()}:{minute}:{seconds}
      </div>
    )
  }
}

module.exports = Clock;
