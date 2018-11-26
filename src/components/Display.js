import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard.js'

class Display extends Component{


arrayLength=()=>{
    if (this.props.searchedRecipes.length > 0){
      return this.props.searchedRecipes.map(recipe => (<RecipeCard recipe={recipe}/>))
    } else {
      return this.props.recipes.map(recipe => (<RecipeCard recipe={recipe}/>))
    }
  }


render(){
  return(
    <div>{this.arrayLength()}</div>
  )
}
}


const mapStateToProps=(state)=>{
  return {recipes: state.recipes,
    searchedRecipes: state.searchedRecipes}
}

export default connect(mapStateToProps)(Display);
