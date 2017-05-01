import React from 'react';

class ListItemComponent extends React.Component {
  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}

module.exports = ListItemComponent;
