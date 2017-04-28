import React from 'react';
import Clock from './Clock.js';

class SuperClock extends React.Component {

  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Clock date={this.state.date} />
        <Clock date={this.state.date} />
      </div>
    );
  }

}

module.exports = SuperClock;
