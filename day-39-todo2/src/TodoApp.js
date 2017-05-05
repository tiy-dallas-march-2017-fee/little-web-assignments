import React from 'react';
import $ from 'jquery';


import Api from './Api.js';
console.log(Api);



const bucketId = 'ec5331fc-5e6d-44f0-990b-577f0d49c5e4';
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    };
  }

  refreshData() {

    const cb = (data) => {
      this.setState({
        items: data.items
      });
    };

    Api.refreshData(cb);
  }

  deleteItem(id, evt) {
    evt.stopPropagation();

    Api.delete(id, () => this.refreshData());

    // This won't work until we implement promises but it sure would be nice
    // Api.delete(id)
    //   .done(() => this.refreshData());
    //
  }

  componentDidMount() {
    this.refreshData();
  }

  createNewItem(inputText) {
    Api.createNewItem(inputText, () => this.refreshData());
  }

  toggleCompletedness(id) {
    $.ajax({
      url: `${baseUrl}item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done(() => {
      this.refreshData();
    })




  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.createNewItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }


  render() {

    const listItems = this.state.items.map((x) =>  {

      const className = x.isComplete ? 'complete' : '';

      return <li className={className} key={x.id} onClick={() => this.toggleCompletedness(x.id)}>
               {x.text}
               <button onClick={(evt) => this.deleteItem(x.id, evt)}>delete</button>
             </li>
    })

    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue}
          />

        <ol>
          {listItems}
        </ol>
      </div>
    );
  }
}

module.exports = TodoApp;
