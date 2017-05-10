import { createStore } from 'redux';


const initialState = {
  queryInputValue: '',
  recipes: [],
  filters: [],
  query: '',
  filterInputValue: ''
};

const reducer = (state = initialState, action) => {
  console.log('store', action);
  switch (action.type) {
    case 'CHANGE_INPUT':
      return Object.assign({}, state, { queryInputValue: action.value });
    case 'SEARCH':
      return Object.assign({}, state, { query: state.queryInputValue, queryInputValue: '' });
    case 'CHANGE_RECIPE_LIST':
      return Object.assign({}, state, { recipes: action.list });
    case 'CHANGE_FILTER_INPUT':
      return Object.assign({}, state, { filterInputValue: action.value });
    case 'ADD_FILTER':
      const newFilterArray = state.filters.slice();
      newFilterArray.push(state.filterInputValue);
      return Object.assign({}, state, { filters: newFilterArray, filterInputValue: '' });
    default: return state;
  }
};

const store = createStore(reducer);

module.exports = store;
