import React, { Component } from 'react';
import './App.css';
import { store } from './store.js';
import api from './Api.js';
import Mimicker from './Mimicker.js';
import Mimicker2 from './Mimicker2.js';

class App extends Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));

    // Does the same thing but with more typing
    // store.subscribe(() => {
    //   const currentState = store.getState();
    //   this.setState(currentState)
    // });
  }

  handleChange(evt) {
    //get the value, create an action, and dispatch it

    const action = { type: 'SEARCH_VALUE_CHANGE', value: evt.target.value };
    store.dispatch(action);
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      api.repoSearch(this.state.searchValue);
    }
  }

  render() {
    const items = this.state.items.map((x) => <li key={x.id}>{x.name}</li>)

    return (
      <div className="App">
        <input
          value={this.state.searchValue}
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          />

        <ol>
          {items}
        </ol>

        <hr />

        <Mimicker />

        <hr />

        <Mimicker2 />

      </div>
    );
  }
}

export default App;
