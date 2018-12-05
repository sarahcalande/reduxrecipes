import React from "react";
import Display from './Display.js'
import Header from './Header.js'
import Home from './Home.js'
import Saved from './Saved.js'
import Form from './Form.js'
import Logout from './Logout.js'
import Show from './Show.js'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from './SearchBar.js'
import Signup from './Signup.js'
import {connect} from 'react-redux'
import {clearOnLogout} from '../redux/actionCreator.js'
import SavedDetails from './SavedDetails.js'
import Try from './Try.js'


const AppRouter = (props) => {


    const logout=()=>{
          props.clearOnLogout()
      localStorage.clear()
    }

return(
  <Router className="router">
  <div >
  <button class="ui secondary button"> <Link to="/">  Home </Link> </button>
  <button class="ui secondary button"> <i className="heart icon"></i> <Link to="/Saved"> Saved Recipes </Link></button>
  <button class="ui secondary button"><Link to="/Form">  Create A Recipe</Link></button>
  <button class="ui secondary button"> <Link to="/Search">  Search</Link></button>
  <button class="ui secondary button" onClick={logout}>  <Link to="/Logout">  Logout</Link></button>
    <button class="ui secondary button">  <Link to="/Login">  Login</Link></button>
    <button class="ui secondary button">  <Link to="/Signup/">  Signup</Link></button>
      <Route path="/" exact component={Home} />
      <Route path="/Saved/" component={Saved} />
      <Route path="/Form/" component={Form} />
      <Route path="/Logout/" component={Logout} />
      <Route path="/Login/" component={Login} />
      <Route path="/Search/" component={SearchBar} />
      <Route path="/Signup/" component={Signup} />
      <Route path="/Show/:id" component={Show} />
      <Route path="/details/:id" component={SavedDetails} />
      <Route path="/try/:id" component={Try} />
  </div>
  </Router>
)};

export default connect(null, {clearOnLogout})(AppRouter)
