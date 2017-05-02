import React, { Component } from 'react';
import './ingredient-filter.css';

class Filter extends Component {

  render() {
    return (
      <div className="ingredient-filter">

        <h2>Would you like to filter?</h2>

        <input />

        <ol>
          <li>salt</li>
          <li>flour</li>
        </ol>

      </div>
    );
  }

}

module.exports = Filter;
