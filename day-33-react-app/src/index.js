import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clicker extends React.Component {

  constructor() {
    super();

    this.state = {
      value: 0
    };
  }

  handleClick() {
    //Don't do this. Bad!
    //this.state.value = this.state.value + 1;

    //Do this.
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    console.log('state?', this.state);

    return (
      <div onClick={() => this.handleClick()}>
        {this.state.value}
      </div>
    )
  }

}


class App extends React.Component {

  render() {
    return (
      <div>
        <Clicker />
        <Clicker />
        <br />
        //
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
