import React, { Component } from 'react';
import {giveToAC} from '../redux/actionCreator.js'
import {connect} from 'react-redux'



class SearchBar extends Component {


  state =
  {
    searchedRecipes: ''
  }



handleSubmit=(e)=>{
  e.preventDefault()
  this.props.giveToAC(this.state.searchedRecipes)
}

handleChange=(e)=>{
  this.setState({
  searchedRecipes: e.target.value
})
}

render(){
  return(
<div class="ui search">
<form onSubmit={this.handleSubmit}>
<input type="search" onChange={this.handleChange}/>
<button>Submit</button>
</form>
</div>
  )
}




}

export default connect(null, {giveToAC})(SearchBar)
