import React from 'react';

class Detail extends React.Component {

  render() {
    console.log(this.props);

    let item;
    for (let i = 0; i < this.props.inventory.length; i++) {
      if (this.props.inventory[i].id == this.props.inventoryId) {
        item = this.props.inventory[i];
        break;
      }
    }

    console.log('item', item);

    return (
      <div>
        <div>Name: {item.name}</div>
        <div>Amount: {item.amount}</div>
        <div>Description: {item.description}</div>
      </div>
    );
  }


}

module.exports = Detail;
