import React, { Component } from 'react';


export default class RecipeCard extends Component{

render(){






  return(<div><h1>{this.props.recipe.recipeName}</h1>
    <img src={this.props.recipe.imageUrlsBySize[90]}/>
    <h3> {this.props.recipe.ingredients.map(ingredient => <div>{ingredient}</div>)} </h3>
    </div>
  )
}




}
