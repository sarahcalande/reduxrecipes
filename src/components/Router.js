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



  const logout=()=>{
    localStorage.clear()
  }

const AppRouter = () => (
  <Router>
  <div className="ui sidebar visible">
  <button> <Link to="/">  Home </Link> </button>
  <button > <i className="heart icon"></i> <Link to="/Saved"> Saved Recipes </Link></button>
  <button ><Link to="/Form">  Create A Recipe</Link></button>
  <button> <Link to="/Search">  Search</Link></button>
  <button onClick={logout}>  <Link to="/Logout">  Logout</Link></button>
    <button>  <Link to="/Login">  Login</Link></button>
    <button>  <Link to="/Signup/">  Signup</Link></button>
      <Route path="/" exact component={Home} />
      <Route path="/Saved/" component={Saved} />
      <Route path="/Form/" component={Form} />
      <Route path="/Logout/" component={Logout} />
      <Route path="/Login/" component={Login} />
      <Route path="/Search/" component={SearchBar} />
      <Route path="/Signup/" component={Signup} />
      <Route path="/Show/:id" component={Show} />
  </div>
  </Router>
);

export default AppRouter;
