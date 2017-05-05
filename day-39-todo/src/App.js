import React from 'react';
import $ from 'jquery';

const bucketId = '8eba54b1-7680-4eab-a6eb-d1abb78e9974';
//const urlRoot = 'http://localhost:5003/'
const urlRoot = 'https://spiffy-todo-api.herokuapp.com/'

import Item from './Item.js';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      items: [],
      inputValue: ''
    };
  }

  createItem(text) {
    $.ajax({
      url: `${urlRoot}api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: text
      }
    })
    .done((data) => {
      console.log('ajax done', data);
      this.loadAllTheThings();
    });
  }

  loadAllTheThings() {
    $.ajax({
      url: `${urlRoot}api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      this.setState({
        items: data.items
      });
    });
  }

  componentDidMount() {
    this.loadAllTheThings();
  }

  handleKeyUp(keyCode) {
    if (keyCode === 13) {
      this.createItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  handleDelete(id) {
    $.ajax({
      url: `${urlRoot}api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done((data) => {
      this.loadAllTheThings();
    });
  }

  handleToggle(id) {
    $.ajax({
      url: `${urlRoot}api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done((data) => {
      this.loadAllTheThings();
    });
  }

  render() {
    console.log('render', this.state);
    var listItems = this.state.items.map(x => {
      return <Item
              key={x.id}
              id={x.id}
              text={x.text}
              isComplete={x.isComplete}
              onDelete={(id) => this.handleDelete(id)}
              onToggle={(id) => this.handleToggle(id)}
              />
    });
    console.log('items?', listItems);

    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(evt) => this.setState({inputValue: evt.target.value})}
          onKeyUp={(evt) => this.handleKeyUp(evt.keyCode)}
          placeholder="enter item here"
          />
        <ol>
          {listItems}
        </ol>
      </div>
    );
  }

}

module.exports = App;
