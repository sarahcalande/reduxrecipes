import React, { Component } from 'react';
import {giveToAC} from '../redux/actionCreator.js'
import {connect} from 'react-redux'
import Display from './Display.js'



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
    <div>
    <h1 className="title">Search for Anything <img src='../../sarrocky.jpg' className="pic"/> </h1>
<div className="ui search">
<form onSubmit={this.handleSubmit}>
<input type="search" onChange={this.handleChange} />
<button>Submit</button>
</form>
</div>
<Display />
</div>
  )
}




}

export default connect(null, {giveToAC})(SearchBar)
