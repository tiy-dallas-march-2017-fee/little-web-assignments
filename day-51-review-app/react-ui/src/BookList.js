import React from 'react';
import store from './store.js';
import $ from 'jquery';

//console.log('are you a store?', store);

class BookList extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    console.log('mounting book list');
    this.stopListening = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.stopListening();
    console.log('unmounting book list');
  }

  handleTitleChange(evt) {
    console.log(evt.target.value);
    store.dispatch({ type: 'TITLE_CHANGE', value: evt.target.value });
  }

  handleAuthorChange(evt) {
    store.dispatch({ type: 'AUTHOR_CHANGE', value: evt.target.value });
  }

  handleAdd() {

    $.ajax({
      url: '/api/book',
      method: 'POST',
      data: {
        author: this.state.authorInput,
        title: this.state.bookTitleInput
      }
    });

    store.dispatch({ type: 'ADD_CLICK' });
  }

  handleLoadBooks() {
    $.ajax({
      url: '/api/books'
    })
    .done((data) => {
      store.dispatch({ type: 'LOAD_BOOKS', books: data })
    });
  }

  render() {

    const books = this.state.books.map((book, i) => {
      return <li key={i}>{book.title}</li>
    });


    return (
      <div>
        <h2>Sending Section</h2>

        <input
          placeholder="title"
          onChange={(evt) => this.handleTitleChange(evt)}
          value={this.state.bookTitleInput}
          />

        <input
          placeholder="author"
          onChange={(evt) => this.handleAuthorChange(evt)}
          value={this.state.authorInput}
          />

        <button onClick={() => this.handleAdd()}>add</button>

        <h2>Display Section</h2>

        <ol>
          {books}
        </ol>

        <button onClick={() => this.handleLoadBooks()}>Load Books From Server</button>

      </div>
    );
  }

}

export default BookList;
