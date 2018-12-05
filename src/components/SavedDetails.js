import React, { Component } from 'react';
import {connect} from 'react-redux'
import {savedDetailsFunction} from '../redux/actionCreator.js'




class SavedDetails extends Component{


state ={
  isLoading: true
}




  componentDidMount=()=>{
    this.props.savedDetailsFunction(this.props.match.params)
    .then(()=>(
      this.setState({
        isLoading: false
      })
    ))
  }



  instructions=()=>{
    window.open(this.props.show.attribution.url)
  }





loading=()=>{
  if (this.state.isLoading){
    return (<div class="ui segment">
  <div class="ui active inverted dimmer">
    <div class="ui text loader">Loading</div>
  </div>
  <p></p>
</div>)
  } else {
    return (<div> <h1>{this.props.show.name}</h1>
      <h3> Ingredients: {this.props.show.ingredientLines.map(line => <div>{line}</div>)}  </h3>
            <div> {this.props.show.images.map(image => <img src= {image.hostedLargeUrl}/>)}  </div>
                 <button onClick={this.instructions}>Instructions</button>
      </div>)
  }
}

render(){
  return(
<div>
  {this.loading()}
</div>
  )
  }
}

const mapStateToProps=(state)=>{
  return {show: state.show}
}

export default connect(mapStateToProps, {savedDetailsFunction})(SavedDetails);
