import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  handleClick() {
    alert('You click well, sir.');
  }

  render() {

    return (
      <div onClick={this.handleClick}>Click on me</div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
