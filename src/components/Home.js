import React, { Component } from 'react';
import {connect} from 'react-redux'
import RecipeCard from './RecipeCard.js'
import Saved from './Saved.js'
import Header from './Header.js'
import Form from './Form.js'

class Home extends Component{




arrayLength=()=>{
    if (this.props.searchedRecipes.length > 0){
      return this.props.searchedRecipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe}/>))
    } else {
      return this.props.recipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe}/>))
    }
  }

  toggleButtons=()=>{
      if (this.props.clicked === true && this.props.form === false){
    return  < Saved />
  } else if (this.props.clicked === false && this.props.form === false){
      return(
        <div class="ui grid">{this.arrayLength()}</div>
      )
    } else {
      return(<Form/>)
    }
  }

render(){
  return(<div><div> <Header />
    </div> <div>{this.toggleButtons()}</div></div>)
}
}

const mapStateToProps=(state)=>{
  return {recipes: state.recipes,
    searchedRecipes: state.searchedRecipes,
    clicked: state.clicked,
  form: state.form}
}

export default connect(mapStateToProps)(Home);
