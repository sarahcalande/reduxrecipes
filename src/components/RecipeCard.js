import React, { Component } from 'react';
import {details} from '../redux/actionCreator.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class RecipeCard extends Component{



handleClick=()=>{
  this.props.history.push(`/show/${this.props.recipe.id}`)
}

handleTry=()=>{
  this.props.history.push(`/try/${this.props.recipe.id}`)
}


handleSave=(recipe)=>{
  console.log(recipe)
  // const ingredientsArr = recipe.ingredients.map(ingredient => {ingredient: ingredient})


  return fetch('http://localhost:3000/user_recipes', {
    method: "POST",
    headers: {
              'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({user_recipe:
    {
      id_name: recipe.id,
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
      <div class="ui medium fade reveal image">
        <img class="visible content" src={this.props.recipe.imageUrlsBySize[90]} onClick={this.handleClick}/>
                 {this.props.recipe.ingredients.map(ingredient => <div className="hidden content" key={ingredient}>{ingredient}</div>)}
        </div>
        <br></br>
          <br></br>
            <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <button class="ui secondary button" onClick={this.handleClick}>Details</button>
                <button class="ui secondary button" onClick={this.handleTry}>Try</button>
        <button class="ui secondary button" onClick={()=>this.handleSave(this.props.recipe)} >Save    <i class="heart icon"></i> </button>
        </div>
        </div>
  )
}




}

export default withRouter(connect(null, {details})(RecipeCard))
