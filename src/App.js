import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import './semantic/dist/semantic.min.css';
import {fetchRecipe} from './redux/actionCreator.js'
import Header from './components/Header.js'
import Display from './components/Display.js'
import NavBar from './components/NavBar.js'
import SearchBar from './components/SearchBar.js'
import Signup from './components/Signup.js'




class App extends Component {

componentDidMount=()=>{
  this.props.fetchRecipe()
  if (localStorage.token !== "undefined"){
    let token = localStorage.getItem("token")
    fetch('http://localhost:3000/currentuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token
      }
    })
  }
}

  render() {
    return (
      <div className="App">
             <NavBar/>
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return {recipes: state.recipes}
}

export default connect(mapStateToProps, {fetchRecipe})(App);
