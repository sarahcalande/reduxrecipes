import React, { Component } from 'react';
import {details} from '../redux/actionCreator.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class RecipeCard extends Component{



handleClick=()=>{
  this.props.history.push(`/show/${this.props.recipe.id}`)
}


handleSave=(recipe)=>{
  return fetch('http://localhost:3000/recipes', {
    method: "POST",
    headers: {
              'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({recipe:
    {
      name: recipe.recipeName,
      ingredients: recipe.imageUrlsBySize,
      image_url: recipe.imageUrlsBySize[90],
      ingredient_ids: []
    }
  })
  })
}


render(){

  return(
    <div class="three wide column">
      <div class="ui card"><h1>{this.props.recipe.recipeName}</h1>
        <img src={this.props.recipe.imageUrlsBySize[90]} onClick={this.handleClick}/>
                <button onClick={this.handleClick}>Details</button>
         {this.props.recipe.ingredients.map(ingredient => <div key={ingredient}>{ingredient}</div>)}
        <button onClick={()=>this.handleSave(this.props.recipe)} >Save    <i class="heart icon"></i> </button>
        </div>
    </div>
  )
}




}

export default withRouter(connect(null, {details})(RecipeCard))
