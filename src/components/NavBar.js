import React, { Component } from 'react';


export default class NavBar extends Component{

render(){

  return(
    <div className="ui sidebar visible">
    <button>Home</button>
    <button onClick={this.handleClick}> <i class="heart icon"></i> Saved Recipes</button>
    <button>Create A Recipe</button>
    </div>
  )
}




}
