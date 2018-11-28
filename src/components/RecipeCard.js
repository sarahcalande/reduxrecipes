import React, { Component } from 'react';
import {details} from '../redux/actionCreator.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class RecipeCard extends Component{



handleClick=()=>{
  this.props.history.push(`/show/${this.props.recipe.id}`)
}


handleSave=(recipe)=>{
  return fetch('http://localhost:3000/user_recipes', {
    method: "POST",
    headers: {
              'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({user_recipe:
    {
      name: recipe.recipeName,
      image_url: recipe.imageUrlsBySize[90]
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
