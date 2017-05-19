import React from 'react';
import $ from 'jquery';
import './sign-up.css';

class SignUp extends React.Component {

  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: '',
      errorMessage: '',
      happyMessage: ''
    }
  }

  handleUsernameChange(evt) {
    this.setState({
      usernameValue: evt.target.value
    });
  }

  handlePasswordChange(evt) {
    this.setState({
      passwordValue: evt.target.value
    });
  }

  handleSignUpClick() {
    $.ajax({
      url: '/api/signup',
      method: 'POST',
      data: {
        username: this.state.usernameValue,
        password: this.state.passwordValue
      }
    })
    .done((data) => {
      this.setState({
        errorMessage: '',
        happyMessage: 'Successfully signed up user',
        usernameValue: '',
        passwordValue: ''
      });
    })
    .fail((xhr, error, responseText) => {
      console.log('xhr', xhr);
      this.setState({
        errorMessage: xhr.status + ': ' + xhr.responseText,
        happyMessage: ''
      });
    });
  }

  render() {

    //If nothing has happened yet, nothing will show. However, if there is an error or happy message, those will be shown.
    let message;
    if (this.state.errorMessage !== '') {
      message = <div className="message bad-message">{this.state.errorMessage}</div>
    }
    else if (this.state.happyMessage !== '') {
      message = <div className="message good-message">{this.state.happyMessage}</div>
    }

    return (
      <div className="sign-up">
        <h2>Sign Up</h2>

        <input
          placeholder="username"
          value={this.state.usernameValue}
          onChange={(evt) => this.handleUsernameChange(evt)}
          />
        <input
          placeholder="password"
          value={this.state.passwordValue}
          onChange={(evt) => this.handlePasswordChange(evt)}
          />
        <button onClick={() => this.handleSignUpClick()}>sign up</button>

        {message}

      </div>
    );
  }

}


module.exports = SignUp;
