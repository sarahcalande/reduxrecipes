let intialState = {
  recipes: [],
  searchedRecipes: [],
  savedRecipes: []
}


const reducer = (state = intialState, action)=>{
  switch (action.type){
    case 'FETCH_RECIPE':
    console.log(action.payload)
    return {...state, recipes: action.payload.matches}
    case 'SEARCH_RECIPE':
    return{...state, searchedRecipes: action.payload.matches}
    case 'SAVED_RECIPE':
    return{...state, savedRecipes: action.payload.matches}
      default: return state
  }
}


export default reducer
