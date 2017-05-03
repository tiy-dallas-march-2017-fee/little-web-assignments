import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';
import $ from 'jquery';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [],
      filters: ['potatoes', 'ketchup', 'molasses'],
      queryInputValue: ''
    }

    this.handleQueryInputChange = this.handleQueryInputChange.bind(this);
    this.handleQueryComplete = this.handleQueryComplete.bind(this);
  }

  makeAjaxCall() {
    let urlToUse = `/api/?i=onions,ketchup&q=${this.state.queryInputValue}`;
    console.log('ajax call', urlToUse);

    $.ajax({
      // This is proxying through create-react-app to avoid CORS
      // Note the `package.json` had to change
      url: urlToUse
    })
    .done((data) => {
      //Their data comes back as text. Lame. Turning that to objects.
      data = JSON.parse(data);

      let mappedArray = data.results.map((x) => {
        // Thumbnails can be blank. Fix that.
        var url = x.thumbnail !== '' ? x.thumbnail : 'no-image-available.png'

        // Here, I am mapping their names to my names.
        return {
          name: x.title,
          url: url,
          ingredients: x.ingredients
        };
      })

      // This will cause the re-render!
      this.setState({
        recipes: mappedArray
      });

      /*
      // For Nikki
      this.setState({
        data: {
          result: mappedArray
        }
      })
      */

    });
  }

  handleQueryInputChange(val) {
    this.setState({
      queryInputValue: val
    });
  }

  handleQueryComplete() {
    this.makeAjaxCall();
    this.setState({
      queryInputValue: ''
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="container">My Recipe App</h1>
        </header>
        <div className="contents container">
          <Query
            inputValue={this.state.queryInputValue}
            onInputChange={this.handleQueryInputChange}
            onInputComplete={this.handleQueryComplete}
            />
          <RecipeList recipes={this.state.recipes} />
          <Filter filters={this.state.filters} />
          <footer>This app is built with <a href="http://recipepuppy.com"><img src="recipepuppy.png" alt="recipe puppy" /></a>.</footer>
        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
