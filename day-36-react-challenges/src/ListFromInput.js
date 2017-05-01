import React from 'react';
import './list-from-input.css';

class ListFromInput extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

  }

  handleKeyUp(evt) {
    console.log('The instance handleKeyUp function')
    if (evt.keyCode === 13) {
      //adding new item
      let copy = this.state.items.slice();
      copy.push(evt.target.value);
      evt.target.value = ''; //This blanks out the input

      this.setState({
        items: copy
      });
    }
  }

  handleItemClick(index) {
    //so `index` has the index to the item in state

    //copy the array, splice at that index, and reset state
    var copy = this.state.items.slice();
    copy.splice(index, 1);
    this.setState({
      items: copy
    });
  }

  render() {
    //Create the list items
    //We need `i` to know which one we click on
    let items = this.state.items.map((x, i) => {
      return <li onClick={() => this.handleItemClick(i)} key={i}>{x}</li>
    });

    return (
      <div className="list-from-input">
        <input onKeyUp={(evt) => { this.handleKeyUp(evt)}} />
        <ol>
          {items}
        </ol>
      </div>
    );
  }
}

module.exports = ListFromInput;
