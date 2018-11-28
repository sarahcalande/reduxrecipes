import React, { Component } from 'react';



export default class Form extends Component{

  state = {
    name: '',
    ingredients: '',
    image_url: ''
  }

  detectChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  submitHandler=(e, state)=>{
    e.preventDefault()
    return fetch('http://localhost:3000/user_recipes', {
      method: "POST",
      headers: {
                'Accept': 'application/json',
              "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({user_recipe:
      {
        name: this.state.name,
        image_url: this.state.image_url
      }
    })
    })
  }

render(){

  return(

<form onSubmit={this.submitHandler} className="form">
<h1 className="title"> Create A Recipe </h1>
<br/>
<input type="text" placeholder="name" name="name" onChange = {this.detectChange}/>
<br/>
<input type="text" placeholder="image_url" name="image_url" onChange = {this.detectChange}/>
  <br/>
  <button>Create</button>
</form>
  )
}




}
