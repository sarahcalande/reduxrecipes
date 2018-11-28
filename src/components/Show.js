import React, { Component } from 'react';
import {connect} from 'react-redux'
import {details} from '../redux/actionCreator.js'




class Show extends Component{


state ={
  isLoading: true
}




  componentDidMount=()=>{
    this.props.details(this.props.match.params.id)
    .then(()=>(
      this.setState({
        isLoading: false
      })
    ))
  }


loading=()=>{
  if (this.state.isLoading){
    return (<div>It's Loading</div>)
  } else {
    return (<div> <h1>{this.props.show.name}</h1>
      <h3> Ingredients: {this.props.show.ingredientLines.map(line => <div>{line}</div>)}  </h3>
            <div> {this.props.show.images.map(image => <img src= {image.hostedLargeUrl}/>)}  </div>
      </div>)
  }
}

render(){
  console.log(this.props.show)
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

export default connect(mapStateToProps, {details})(Show);
