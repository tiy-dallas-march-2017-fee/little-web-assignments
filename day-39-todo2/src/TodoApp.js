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
      // console.log('what data do I have?', data);
      this.setState({
        items: data.items
      })
    });
  }

  deleteItem(id) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done((data) => {
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

  //put button on item
  //How do you delete with ajax?
  //Hook up button so that when clicked it does the thing
  //refresh after delete


  render() {

    const listItems = this.state.items.map((x) =>  {
      return <li key={x.id}>
               {x.text}
               <button onClick={() => this.deleteItem(x.id)}>delete</button>
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
