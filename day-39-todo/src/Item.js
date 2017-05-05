import React from 'react';
import './item.css';

class Item extends React.Component {

  handleToggle() {
    if (this.props.onToggle) {
      this.props.onToggle(this.props.id)
    }
  }

  handleDelete(evt) {
    evt.stopPropagation();
    if (this.props.onDelete) {
      this.props.onDelete(this.props.id);
    }
  }

  render() {

    let spanClass = this.props.isComplete ? 'done' : '';

    return (
      <li className="item" onClick={() => this.handleToggle()}>
        <span className={spanClass}>{this.props.text}</span>
        <button onClick={(evt) => this.handleDelete(evt)}>delete</button>
      </li>
    )
  }
}

module.exports = Item;
