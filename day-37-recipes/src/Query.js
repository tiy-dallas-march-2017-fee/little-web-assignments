import React from 'react';
import './query.css';

class Query extends React.Component {

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.props.onInputComplete();
    }
  }

  render() {
    return (
      <div className="query-bar">
        <input
          placeholder="Search Query"
          value={this.props.inputValue}
          onChange={(evt) => this.props.onInputChange(evt.target.value)}
          onKeyUp={(evt) => this.handleKeyUp(evt)} />
      </div>
    );
  }

}

module.exports = Query;
