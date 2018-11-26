import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.css';
import './semantic/dist/semantic.min.css';
import {fetchRecipe} from './redux/actionCreator.js'
import Header from './components/Header.js'
import Display from './components/Display.js'
import NavBar from './components/NavBar.js'
import SearchBar from './components/SearchBar.js'

class App extends Component {

componentDidMount(){
  this.props.fetchRecipe()
}

  render() {
    console.log(this.props.recipes)
    return (
      <div className="App">
      <Header/>
             <NavBar/> <SearchBar/>
      <Display/>
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return {recipes: state.recipes}
}

export default connect(mapStateToProps, {fetchRecipe})(App);
