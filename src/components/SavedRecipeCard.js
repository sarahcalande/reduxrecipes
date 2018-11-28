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

//
// handleClick=()=>{
//   this.props.history.push(`/show/${this.props.recipe.id}`)
// }





render(){

  return(
    <div class="three wide column">
      <div class="ui card">
      <button onClick={this.deleteThis}> Delete </button>
      <h1>{this.props.recipe.name}</h1>
      <img src={this.props.recipe.image_url}/>
        <button onClick={this.handleClick}>Details</button>
        <button> Saved    <i class="heart icon"></i> </button>
        </div>
    </div>
  )
}




}

export default withRouter(connect(null, {details})(SavedRecipeCard))
