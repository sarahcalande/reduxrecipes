import React, { Component } from 'react';




export default class Login extends Component{


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


login=(e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password,
      }
    })
  })
    .then(r => r.json())
    .then(r=>{
      console.log(r)
      localStorage.setItem("token", r.jwt)
    }).then(this.props.history.push('/'))
}






render(){
  return(
    <div>
    <h1 className="title">Welcome<img src='../../sarrocky.jpg' className="pic"/> </h1>
<form onSubmit={this.login}>
<input type="text" placeholder="username" name="username" onChange = {this.detectChange}/>
<input type="password" placeholder="password" name="password" onChange = {this.detectChange}/>
<br/>
<button>Submit</button>
</form>
</div>
  )
}




}
