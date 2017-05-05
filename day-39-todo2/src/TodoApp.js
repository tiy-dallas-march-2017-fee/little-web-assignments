import React from 'react';
import $ from 'jquery';

const bucketId = 'ec5331fc-5e6d-44f0-990b-577f0d49c5e4';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    };
  }

  refreshData() {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('what data do I have?', data);
      this.setState({
        items: data.items
      })
    });
  }

  deleteItem(id, evt) {
    evt.stopPropagation();

    console.log('deleting');
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done(() => {
      this.refreshData();
    });
  }

  componentDidMount() {
    this.refreshData();
  }

  createNewItem(inputText) {
    //ajax call to save data
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data) => {
      console.log('what do I get back?', data);

      this.refreshData();
    });
  }

  toggleCompletedness(id) {
    console.log('totally updating');

    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done(() => {
      console.log('toggled state of', id);
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
