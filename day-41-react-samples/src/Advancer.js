import React from 'react';
import { store, actions } from './AdvancerStore.js';


class Advancer extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <div>
        <p>{this.state.currentMessage}</p>
        <button onClick={() => store.dispatch(actions.PREVIOUS)}>previous</button>
        <button onClick={() => store.dispatch(actions.NEXT)}>next</button>
      </div>
    );
  }



}

export default Advancer;
