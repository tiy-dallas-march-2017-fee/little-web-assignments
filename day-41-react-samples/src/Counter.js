import React from 'react';
import { createStore } from 'redux';


var constants = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};



const INCREMENT = { type: constants.INCREMENT };
const DECREMENT = { type: constants.DECREMENT };

const counterReducer = (state = { number: 0 }, action) => {

  switch (action.type) {
    case constants.INCREMENT:
      return { number: state.number + 1 };
    case constants.DECREMENT:
      return { number: state.number - 1 };
  }

  return state;
};

var store = createStore(counterReducer);



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

  down() {
    store.dispatch(DECREMENT);
  }

  up() {
    store.dispatch(INCREMENT);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.down()}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.up()}>+</button>
      </div>
    );
  }

}

export default Counter;
//module.exports = Counter;
