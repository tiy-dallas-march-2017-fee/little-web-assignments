import { createStore } from 'redux';





const initialState = {
  bookTitleInput: '',
  authorInput: '',
  books: []
};

const reducerFunction = (state = initialState, action) => {

  switch(action.type) {
    case 'TITLE_CHANGE':
      return Object.assign({}, state, { bookTitleInput: action.value });
    case 'AUTHOR_CHANGE':
      return Object.assign({}, state, { authorInput: action.value });
    case 'ADD_CLICK':
      return Object.assign({}, state, {
        bookTitleInput: '',
        authorInput: ''
      });
    case 'LOAD_BOOKS':
      return Object.assign({}, state, { books: action.books });
    default:
      return state;
  }
};

const store = createStore(reducerFunction, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
