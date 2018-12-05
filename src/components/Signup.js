import React, { Component } from 'react';
import Header from './Header.js'



export default class Signup extends Component{


  state = {
    name: '',
    username: '',
    password: '',
  }

  detectChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }


signup=(e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
      }
    })
  })
    .then(r => r.json())
    .then(r=>localStorage.setItem("token", r.jwt))
    .then(this.props.history.push('/'))
}


render(){
  return(
    <div>
    <Header/>
<form onSubmit={this.signup}>
<br/>
<input type="text" placeholder="name" name="name" onChange = {this.detectChange}/>
<input type="text" placeholder="username" name="username" onChange = {this.detectChange}/>
<input type="password" placeholder="password" name="password" onChange = {this.detectChange}/>
<br/>
<button>Submit</button>
</form>
<img src='../../sarrocky.jpg' className="pic"/>
</div>
  )
}




}
