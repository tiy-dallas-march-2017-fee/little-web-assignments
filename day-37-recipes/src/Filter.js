import React, { Component } from 'react';
import './ingredient-filter.css';

class Filter extends Component {

  render() {
    console.log('my filters?', this.props);

    const filterItems = this.props.filters.map((x, i) => <li key={i + x}>{x}</li>)

    return (
      <div className="ingredient-filter">

        <h2>Would you like to filter?</h2>

        <input />

        <ol>
          {filterItems}
        </ol>

      </div>
    );
  }

}

module.exports = Filter;
