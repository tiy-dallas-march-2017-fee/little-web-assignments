import { createStore } from 'redux';

//Constants
const constants = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};


//Actions
const INCREMENT = { type: constants.INCREMENT };
const DECREMENT = { type: constants.DECREMENT };
const RESET = { type: constants.RESET };

var initialState = {
  number: 0,
  whatever: 'else'
};

//Reducer
const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case constants.INCREMENT:
      return { number: state.number + 1 };
    case constants.DECREMENT:
      return { number: state.number - 1 };
    case constants.RESET:
      return { number: 0 };
  }

  return state;
};

//Store
const store = createStore(counterReducer);

module.exports = {
  store: store,
  actions: {
    DECREMENT: DECREMENT,
    INCREMENT: INCREMENT,
    RESET: RESET
  }
};
