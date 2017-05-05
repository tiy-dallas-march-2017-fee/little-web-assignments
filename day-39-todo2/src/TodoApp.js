import React from 'react';
import $ from 'jquery';

const bucketId = 'ec5331fc-5e6d-44f0-990b-577f0d49c5e4';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {

    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('what data do I have?', data);
    });

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


  render() {
    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          />
      </div>
    );
  }
}

module.exports = TodoApp;
