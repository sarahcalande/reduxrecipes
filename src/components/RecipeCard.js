import React, { Component } from 'react';


export default class RecipeCard extends Component{



handleClick=()=>{
  window.open(`https://www.yummly.com/recipe/${this.props.recipe.id}`)
}

//
// handleSave=(this.props.recipe)=>{
//   return fetch(localhost3000/recipes , {
//     method: 'POST',
//     headers: content-type: application/json
//     body: JSON.stringify(this.props.recipe)
//   }.then(r=>r.json())
//    .then(data => addToSaves(data))
// }



render(){

  return(
    <div class="three wide column">
      <div class="ui card"><h1>{this.props.recipe.recipeName}</h1>
        <img src={this.props.recipe.imageUrlsBySize[90]} onClick={this.handleClick}/>
                <button onClick={this.handleClick}>Details</button>
         {this.props.recipe.ingredients.map(ingredient => <div>{ingredient}</div>)}
        <button onClick={this.handleSave}>Save    <i class="heart icon"></i> </button>
        </div>
    </div>
  )
}




}
