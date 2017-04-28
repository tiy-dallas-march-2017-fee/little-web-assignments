import React from 'react';
import $ from 'jquery';
import './github-repositories.css';

class GithubRepositories extends React.Component {

  constructor() {
    super();

    this.state = {
      repos: []
    };
  }

  componentDidMount() {

    $.ajax({
      url: 'https://api.github.com/search/repositories?q=koala'
    })
    .done((data) => {
      console.log('data', data);
      this.setState({
        repos: data.items
      })
    });

  }

  render() {

    var list = this.state.repos.map((x) => {
      return <li key={x.id}><a href={x.html_url} target="_blank">{x.name}</a></li>
    });

    return (
      <div className="github-repositories">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

module.exports = GithubRepositories;
