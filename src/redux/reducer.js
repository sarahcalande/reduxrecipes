let intialState = {
  recipes: [],
  searchedRecipes: []
}


const reducer = (state = intialState, action)=>{
  switch (action.type){
    case 'FETCH_RECIPE':
    console.log(action.payload)
    return {...state, recipes: action.payload.matches}
    case 'SEARCH_RECIPE':
    return{...state, searchedRecipes: action.payload.matches}
      default: return state
  }
}


export default reducer
