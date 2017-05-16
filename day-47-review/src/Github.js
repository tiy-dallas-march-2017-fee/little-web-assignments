import React from 'react';
import $ from 'jquery';

class Github extends React.Component {

  constructor() {
    super();

    this.state = {
      repositories: [],
      pageNumber: 1
    };
  }

  ajaxGetRepos() {
    $.ajax({
      url: 'https://api.github.com/search/repositories?q=spoon&page=' + this.state.pageNumber
    })
    .done((data) => {
      this.setState({
        repositories: data.items
      });
    });
  }

  componentDidMount() {
    this.ajaxGetRepos();
  }

  handleNextClick() {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    }, () => {
      this.ajaxGetRepos(); //prefer two lines for the callback? Use this.
    });
  }

  handlePreviousClick() {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    }, () => this.ajaxGetRepos()); //Prefer one line? Use this?
  }

  render() {

    const items = this.state.repositories.map((x) => {
      return <li key={x.id}>{x.name}</li>
    });

    return (
      <div>
        <p>Page: {this.state.pageNumber}</p>
        <ol>
          {items}
        </ol>
        <button onClick={() => this.handleNextClick()}>next</button>
        <button onClick={() => this.handlePreviousClick()}>previous</button>
      </div>
    );
  }

}

module.exports = Github;
