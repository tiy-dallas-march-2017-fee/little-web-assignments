import React, { Component } from 'react';
import './ingredient-filter.css';

class Filter extends Component {


  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.props.onInputComplete();
    }
  }


  render() {
    console.log('my filters?', this.props);

    const filterItems = this.props.filters.map((x, i) => <li key={i + x}>{x}</li>)

    return (
      <div className="ingredient-filter">

        <h2>Would you like to filter?</h2>

        <input
          value={this.props.inputValue}
          onChange={(evt) => this.props.onInputChange(evt.target.value)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          />

        <ol>
          {filterItems}
        </ol>

      </div>
    );
  }

}

module.exports = Filter;
