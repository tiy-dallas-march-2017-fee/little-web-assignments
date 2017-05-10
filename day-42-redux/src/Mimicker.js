import React from 'react';
import { createStore } from 'redux';



const reducer = (state = { value: 'fads' }, action) => {
  if (action.type === 'INPUT_CHANGE') {
      return Object.assign({}, state, { value: action.value });
  }
  else {
    return state;
  }
}

const store = createStore(reducer);



class Mimicker extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  handleChange(evt) {
    store.dispatch({ type: 'INPUT_CHANGE', value: evt.target.value })
  }

  render() {
    return (
      <div>
        <input onChange={(evt) => this.handleChange(evt)} />
        <p style={{color: 'red', fontWeight: 'bold'}}>{this.state.value}</p>
      </div>
    )
  }

}

module.exports = Mimicker;
