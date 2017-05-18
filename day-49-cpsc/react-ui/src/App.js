import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();

    this.state = {
      fullIssueList: [], //Where we will store all the data
      filteredIssueList: [], //Where we will store only the subset that we want to show
      inputValue: ''
    }
  }

  componentDidMount() {

    $.ajax({
      url: '/api/data'
    })
    .done((data) => {
      this.setState({
        fullIssueList: data.violations //we now have all the data!
      })
    });

  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      //When they hit enter, we go pull a list of things that match what was entered

      const filteredList = [];
      for (let i = 0; i < this.state.fullIssueList.length; i++) {
        let issue = this.state.fullIssueList[i];
        if (issue.violation.indexOf(this.state.inputValue) > -1) {
          filteredList.push(issue);
        }
      }

      //Then we put that in state
      this.setState({
        inputValue: '',
        filteredIssueList: filteredList
      });
    }
  }


  render() {
    let list;
    //We only put the data on the page when filteredIssueList has data in it.
    if (this.state.filteredIssueList.length > 0) {
      list = this.state.filteredIssueList.map((issue) => {
        return <tr>
          <td>{issue.date}</td>
          <td>{issue.product}</td>
          <td>{issue.violation}</td>
          <td>{issue.firm}</td>
        </tr>
      });
    }

    return (
      <div className="App">
        <input
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          value={this.state.inputValue} />
        <table className="violation-list">
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Violation</th>
              <th>Firm</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
