import React, { Component } from 'react';
import {connect} from 'react-redux'
import {switchFunction} from '../redux/actionCreator.js'
import {showForm} from '../redux/actionCreator.js'
import AppRouter from './Router.js'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class NavBar extends Component{

// 
// handleClick=()=>{
// this.props.switchFunction()
// }
//
//
// showFormInDisplay=()=>{
//   this.props.showForm()
// }

render(){

  return(
          <AppRouter />
  )
}




}

const mapDispatchToProps = dispatch => {
  return {
    switchFunction,
    showForm
  }
}



export default connect(null, mapDispatchToProps)(NavBar)
