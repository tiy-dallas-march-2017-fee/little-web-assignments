import React from 'react';
import './counter.css';

class Counter extends React.Component {

  constructor() {
    super();

    this.state = {
      value: 0
    }
  }

  down() {
    if (this.state.value === 0) {
      return;
    }

    this.setState({
      value: this.state.value - 1
    });
  }

  up() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={() => this.down()}>down</button>
        <span>{this.state.value}</span>
        <button onClick={() => this.up()}>up</button>
      </div>
    )
  }

}

module.exports = Counter;
