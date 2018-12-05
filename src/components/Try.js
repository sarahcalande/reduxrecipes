import React, { Component } from 'react';
import {connect} from 'react-redux'
import {details} from '../redux/actionCreator.js'



class Try extends Component{


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



  instructions=()=>{
    window.open(this.props.show.attribution.url)
  }




showVanilla=()=>{
    if (/vanilla/g.test(this.props.show.ingredientLines)){
        return(<img draggable="true" src='../../vanilla.jpg'/>)
  }
}

showEgg=()=>{
  if (/egg/g.test(this.props.show.ingredientLines)){
      return(<img draggable="true" src='../../egg.jpg'/>)
}
}

showFlour=()=>{
  if ((/flour/g.test(this.props.show.ingredientLines))||(/Flour/g.test(this.props.show.ingredientLines))){
      return(<img draggable="true" src='../../flour.jpg'/>)
}
}


showSugar=()=>{
  if ((/sugar/g.test(this.props.show.ingredientLines))||(/Sugar/g.test(this.props.show.ingredientLines))){
      return(<img draggable="true" src='../../sugar.jpg'/>)
    }
}


showChocolate=()=>{
  if ((/chocolate/g.test(this.props.show.ingredientLines))||(/Chocolate/g.test(this.props.show.ingredientLines))){
      return(<img draggable="true" src='../../chocolate.jpg'/>)
    }
}

showButter=()=>{
  if ((/butter/g.test(this.props.show.ingredientLines))||(/Butter/g.test(this.props.show.ingredientLines))){
      return(<img draggable="true" src='../../butter.jpg'/>)
    }
}



showVeggies=()=>{
  if ((/greenbeans/g.test(this.props.show.ingredientLines))||(/mushrooms/g.test(this.props.show.ingredientLines))||(/avocado/g.test(this.props.show.ingredientLines))){
      return(<img draggable="true" src='../../vegetables.jpg'/>)
    }
}

showMeat=()=>{
  if ((/lamb/g.test(this.props.show.ingredientLines))||(/steak/g.test(this.props.show.ingredientLines))||(/chicken/g.test(this.props.show.ingredientLines))||(/pork/g.test(this.props.show.ingredientLines))||(/rib/g.test(this.props.show.ingredientLines))){
      return(<img draggable="true" src='../../meat.jpg'/>)
    }
}


  showPic=()=>{
      return this.props.show.images.map(image => <img src= {image.hostedLargeUrl}/>)
  }

  showFish=()=>{
    if ((/salmon/g.test(this.props.show.ingredientLines))||(/cod/g.test(this.props.show.ingredientLines))||(/haddock/g.test(this.props.show.ingredientLines))||(/tuna/g.test(this.props.show.ingredientLines))){
        return(<img draggable="true" src='../../fish.jpg'/>)
      }
  }


  showSalt=()=>{
    if ((/salt/g.test(this.props.show.ingredientLines))||(/Salt/g.test(this.props.show.ingredientLines))){
        return(<img draggable="true" src='../../salt.jpg'/>)
      }
  }

  showFruit=()=>{
    if ((/apple/g.test(this.props.show.ingredientLines))||(/banana/g.test(this.props.show.ingredientLines))||(/Apple/g.test(this.props.show.ingredientLines))||(/Banana/g.test(this.props.show.ingredientLines))){
        return(<img draggable="true" src='../../fruit.jpg'/>)
      }
  }

  showChickpeas=()=>{
    if ((/chickpeas/g.test(this.props.show.ingredientLines))||(/Chickpeas/g.test(this.props.show.ingredientLines))){
        return(<img draggable="true" src='../../chickpeas.jpg'/>)
      }
  }

  showBread=()=>{
    if ((/bread/g.test(this.props.show.ingredientLines))||(/Bread/g.test(this.props.show.ingredientLines))){
        return(<img draggable="true" src='../../bread.jpg'/>)
      }
  }

  //rice
//pasta
//cheese

allowDrop=(e)=> {
      e.preventDefault();
  }

drag=(e)=> {
      e.dataTransfer.setData("img", e.target.src);
  }

drop=(e)=>{
      e.preventDefault();
      var data = e.dataTransfer.getData("img");
        e.target.textContent += data;
        if (/salt/g.test(e.target.textContent)){
            e.target.src= this.props.show.images.map(image => `${image.hostedLargeUrl}`)
          }
          else if (e.target.textContent.match('bread')){
        e.target.src= '../../letsgetthisbread.jpg'
      }
          else if (/flour/g.test(e.target.textContent)){
        e.target.src= '../../filledbowl.jpg'
      }
          else if (e.target.textContent.match('egg')){
        e.target.src= '../../eggbowl.jpg'
        }
        else if (e.target.textContent.match('chocolate')){
      e.target.src= '../../browniemix.jpg'
      }
      else if (e.target.textContent.match('vegetables')){
    e.target.src= '../../vegbowl.jpg'
    }
    else if (e.target.textContent.match('meat')){
  e.target.src= '../../meatbowl.jpg'
  }
        else if (e.target.textContent.match('fish')){
      e.target.src= '../../fishbowl.jpg'
      }

    else {
                    e.target.src= '../../filledbowl.jpg'
            }

  }



loading=()=>{
  if (this.state.isLoading){
    return (<div>It's Loading</div>)
  } else {
    return (<div> <h1 className="title">{this.props.show.name}</h1>
        <img src='../../usagi.gif'/>
      <h1>Drag Ingredients To The Bowl To Try</h1>
            <img src='../../bowl.jpg' className="dropzone" droppable="true" onDrop={(e)=>this.drop(e)} onDragOver={(e)=>this.allowDrop(e)}/>
      <h3>{this.props.show.yield}</h3>
      <h3>Total time: {this.props.show.totalTime}</h3>   <h3>Cook time: {this.props.show.cookTime}</h3>
      <div class="ui grid">
      <div onDragStart= {(e)=>this.drag(e)} > {this.showVanilla()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showFlour()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showSugar()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showEgg()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showChocolate()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showVeggies()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showMeat()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showFish()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showButter()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showSalt()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showFruit()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showChickpeas()} </div>
      <div onDragStart= {(e)=>this.drag(e)} > {this.showBread()} </div>
      </div>
      <h3> Ingredients: {this.props.show.ingredientLines.map(line => <div>{line}</div>)}  </h3>
                 <button onClick={this.instructions}>Instructions</button>
      </div>)
  }
}

render(){
  return(
<div>
  {this.loading()}
  <img src='../../sarrocky.jpg' className="pic"/>
</div>
  )
  }
}

const mapStateToProps=(state)=>{
  return {show: state.show}
}

export default connect(mapStateToProps, {details})(Try);
