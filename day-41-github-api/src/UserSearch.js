import React from 'react';
import { store, actions } from './GithubStore.js';
import $ from 'jquery';

class UserSearch extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  handleChange(evt) {
    // This is how you might create an action based on user input.
    store.dispatch(Object.assign({}, actions.SEARCH_INPUT_CHANGE, { value: evt.target.value }));

    // You could also just create an action on the fly like this.
    //store.dispatch({ type: 'SEARCH_INPUT_CHANGE', value: evt.target.value });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      // Time to make an ajax call!
      $.ajax({
        url: `https://api.github.com/search/users?q=${this.state.userSearchValue}`
      })
      .done((data) => {
        // There is data now! Tell the store...
        store.dispatch(Object.assign({}, actions.SHOW_USERS, { users: data.items }));
      });
    }
  }

  render() {
    const users = this.state.users.map((x) => <li key={x.id}>{x.login}</li>);

    return (
      <div className="user-search">
        <input
          value={this.state.userSearchValue}
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          />
        <ol>
          {users}
        </ol>
      </div>
    );
  }

}

module.exports = UserSearch;
