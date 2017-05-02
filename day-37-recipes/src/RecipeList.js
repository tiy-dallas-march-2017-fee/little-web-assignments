import React, { Component } from 'react';
import './recipe-list.css';

class Recipe extends Component {
  render() {
    return (
      <li>
        <img src={this.props.url} alt={this.props.name} />
        <div className="details">
          <h2>{this.props.name}</h2>
          <div className="ingredients">
            Ingredients: {this.props.ingredients}
          </div>
        </div>
      </li>
    );
  }
}

class RecipeList extends Component {

  render() {

    var recipes = this.props.recipes.map((x, index) => {
      return <Recipe
              url={x.url}
              name={x.name}
              ingredients={x.ingredients}
              key={index + x.name} />
    });

    return (
      <div className="recipe-list">
        <ol>
          {recipes}
        </ol>
      </div>
    );
  }

}

module.exports = RecipeList;
