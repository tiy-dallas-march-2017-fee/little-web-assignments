import { createStore } from 'redux';

const SHOW_USERS = { type: 'SHOW_USERS' };
const SEARCH_INPUT_CHANGE = { type: 'SEARCH_INPUT_CHANGE' };

const initialState = {
  users: [],
  userSearchValue: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGE':
      // When the input changes, create a new version of the state with the new text value
      return Object.assign({}, state, { userSearchValue: action.value });
    case 'SHOW_USERS':
      // When user data is available, add it and blank out search value
      return Object.assign({}, state, { users: action.users, userSearchValue: '' });
  }

  return state;
};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: {
    SHOW_USERS: SHOW_USERS,
    SEARCH_INPUT_CHANGE: SEARCH_INPUT_CHANGE
  }
}
