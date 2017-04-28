import React from 'react';
import './warmup.css';

class Warmup extends React.Component {

  constructor() {
    super();

    this.state = {
      value: 'on'
    }
  }

  toggle() {
    this.setState({
      value: this.state.value === 'on' ? 'off' : 'on'
    })
  }

  render() {
    return (
      <div className="toggle">
        <div onClick={() => this.toggle()}>{this.state.value}</div>
      </div>
    )
  }

}

module.exports = Warmup;
