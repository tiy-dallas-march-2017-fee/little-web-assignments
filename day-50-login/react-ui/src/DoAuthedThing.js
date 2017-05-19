import React from 'react';
import $ from 'jquery';
import './do-authed-thing.css';

class DoAuthedThing extends React.Component {

  constructor() {
    super();

    this.state = {
      errorMessage: '',
      happyMessage: ''
    }
  }

  handleClick() {
    $.ajax({
      url: '/api/authy'
    })
    .done((data) => {
      //yay, the user is authenticated!
      this.setState({
        errorMessage: '',
        happyMessage: 'You have done something good, fine sir or madam'
      });
    })
    .fail((xhr, error, responseText) => {
      //boo, the user is unknown!
      this.setState({
        errorMessage: xhr.status + ': ' + responseText,
        happyMessage: ''
      });
    });
  }

  render() {

    //If nothing has happened yet, nothing will show. However, if there is an error or happy message, those will be shown.
    let message;
    if (this.state.errorMessage !== '') {
      message = <div className="message" style={{backgroundColor: 'pink', border: 'solid 1px red'}}>{this.state.errorMessage}</div>
    }
    else if (this.state.happyMessage !== '') {
      message = <div className="message" style={{backgroundColor: '#ccffff', border: 'solid 1px #00cccc'}}>{this.state.happyMessage}</div>
    }

    return (
      <div className="do-authed-thing">
        <p>What happens when a browser calls an API but is not authenticated? That is what this is for.</p>

        <p>Click this button. If the user is authed, you will get a happy message. If the user is not, you will get a sad message.</p>
        <button onClick={() => this.handleClick()}>Do it</button>
        {message}
      </div>
    );
  }
}

module.exports = DoAuthedThing;
