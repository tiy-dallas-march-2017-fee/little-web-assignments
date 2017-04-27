import React from 'react';
import './tick-counter.css';

class TickCounter extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);

  }

  render() {
    return (
      <div className="tick-counter">
        {this.state.count}
      </div>
    )
  }
}

module.exports = TickCounter;
