import { createStore } from 'redux';

var initialState = {
  searchValue: '',
  items: []
};

const reducer = (state = initialState, action) => {
  console.log('reducer running, yo', action);

  switch (action.type) {
    case 'SEARCH_VALUE_CHANGE':
      return { searchValue: action.value, items: [] }
    case 'CHANGE_REPOS':
      return { searchValue: '', items: action.items }
    default: return state;
  }
}

const store = createStore(reducer);

module.exports = {
  store: store
}
