import React, { Component } from 'react';
import RecipeCard from './RecipeCard.js'
import {connect} from 'react-redux'
import {saves} from '../redux/actionCreator.js'
import SavedRecipeCard from './SavedRecipeCard.js'

class Saved extends Component{




componentDidMount=()=>{
  this.props.saves()
}


returnSaved=()=>{
  if (this.props.savedRecipes.length > 0){
  return (<div class="ui grid">{this.props.savedRecipes.map(recipe => (<SavedRecipeCard recipe={recipe}/>))}</div>)
} else {
  return "You have nothing saved!"
  }
}



render(){
  return(
    <div>{this.returnSaved()}
<img src='../../sarrocky.jpg' className="pic"/>
    </div>
  )
}
}


const mapStateToProps=(state)=>{
  return {savedRecipes: state.savedRecipes}
}

export default connect(mapStateToProps, {saves})(Saved);
