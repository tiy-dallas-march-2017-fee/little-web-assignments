import React from 'react';
import './simple-list.css';

//If you wanted a separate list item component
//import ListItemComponent from './ListItemComponent.js';

class SimpleList extends React.Component {

  constructor() {
    super();

    this.state = {
      items: ['first', 'second', 'third', 'fourth']
    };
  }

  render() {
    var items = this.state.items.map((x, i) => <li key={i}>{x}</li>);

    return (
      <div className="simple-list">
        <ol>
          {items}
        </ol>
      </div>
    )
  }
}

module.exports = SimpleList;
