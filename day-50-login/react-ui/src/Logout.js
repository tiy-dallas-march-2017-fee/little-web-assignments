import React from 'react';
import $ from 'jquery';

class Logout extends React.Component {

  handleLogout() {
    $.ajax({
      url: '/api/logout',
      method: 'POST'
    })
    .done(() => {
      console.log('Logout complete.');
    });
  }

  render() {
    return (
      <div className="logout">
        <button onClick={() => this.handleLogout()}>Log out</button>
      </div>
    );
  }
}

module.exports = Logout;
