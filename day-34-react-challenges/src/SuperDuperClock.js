import React from 'react';

class SuperDuperClock extends React.Component {

  constructor() {
    super();

    this.state = {
      date: new Date(),
      pants: true
    };
  }

  changeTime() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.changeTime(), 1000);
  }

  render() {
    return (
      <div>
        <Clock date={this.state.date} offset={-2} timezone="California Time" />
        <Clock date={this.state.date} offset={0} timezone="Awesome Dallas Time"/>
        <Clock date={this.state.date} offset={1} timezone="Marvel Corporate Office Time"/>
      </div>
    );
  }
}

class Clock extends React.Component {
  render() {

    var hour = this.props.date.getHours() + this.props.offset;
    if (hour > 12) {
      hour -= 12;
    }

    var seconds = this.props.date.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return (
      <div>
        {this.props.timezone} - {hour}:{this.props.date.getMinutes()}:{seconds}
      </div>
    );
  }
}

module.exports = SuperDuperClock;
