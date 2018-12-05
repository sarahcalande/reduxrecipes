import React, { Component } from 'react';
import {details} from '../redux/actionCreator.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

// npm install axios
//const axios = require('axios')
// axios.get(url)
//axios.post(url)
//axios.delete(url/id)

class SavedRecipeCard extends Component{



deleteThis=(e, recipe)=>{
  e.target.parentElement.remove()
  return fetch(`http://localhost:3000/recipes/${this.props.recipe.id}`, {
      method: "DELETE",
      headers: {
                'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    })
}


handleClick=()=>{
  if (this.props.recipe.id_name !== null){
  this.props.history.push(`/show/${this.props.recipe.id_name}`)
} else {
  this.props.history.push(`/SavedDetails/${this.props.recipe.id}`)
  }
}


handleTry=()=>{
  this.props.history.push(`/try/${this.props.recipe.id_name}`)
}

render(){
  return(
    <div class="three wide column">
      <div class="ui card">
      <button onClick={this.deleteThis}> Delete </button>
      <h1>{this.props.recipe.name}</h1>
      <img src={this.props.recipe.image_url}/>
      <button onClick={this.handleClick}>Details</button>
      <button onClick={this.handleTry} className="try">Try</button>
      <div>{this.props.recipe.ingredients}</div>
        <button> Saved    <i class="heart icon"></i> </button>
        </div>
    </div>
  )
}




}

export default withRouter(connect(null, {details})(SavedRecipeCard))
