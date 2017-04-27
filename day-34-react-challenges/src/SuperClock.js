import React from 'react';
import './super-clock.css';

class SuperClock extends React.Component {

  render() {
    return (
      <div className="super-clock">
        <h2>Super Clock</h2>
        <Clock offset="1" label="NYC Time" />
        <Clock offset="0" label="Texas Time" />
        <Clock offset="-2" label="California Time"/>
      </div>
    )
  }
}



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

    var hour = this.state.currentTime.getHours();
    hour += Number(this.props.offset);

    var minute = this.state.currentTime.getMinutes();
    if (minute < 10) {
      minute = '0' + minute;
    }

    return (
      <div className="clock">
        {this.props.label}: {hour}:{minute}:{seconds}
      </div>
    )
  }
}

module.exports = SuperClock;
