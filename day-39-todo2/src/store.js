import { createStore } from 'redux';





const initialState = {
  items: [],
  inputValue: ''
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);

  switch (action.type) {
    case 'UPDATE_ITEMS':
      return Object.assign({}, state, { items: action.items });
    case 'INPUT_CHANGE':
      return Object.assign({}, state, { inputValue: action.value });
    case 'CLEAR_INPUT':
      return Object.assign({}, state, { inputValue: '' });
    default: return state;
  }
}

const store = createStore(reducer);

module.exports = store;
