import React from 'react';
import { store, actions } from './CounterStore.js';

class Counter extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => store.dispatch(actions.DECREMENT)}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => store.dispatch(actions.INCREMENT)}>+</button>
        <button onClick={() => store.dispatch(actions.RESET)}>reset</button>
      </div>
    );
  }

}

export default Counter;
//module.exports = Counter;
