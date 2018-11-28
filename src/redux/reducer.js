let intialState = {
  recipes: [],
  searchedRecipes: [],
  savedRecipes: [],
  clicked: false,
  form: false,
  show: null
}


const reducer = (state = intialState, action)=>{
  switch (action.type){
    case 'FETCH_RECIPE':
    return {...state, recipes: action.payload.matches}
    case 'SEARCH_RECIPE':
    return{...state, searchedRecipes: action.payload.matches}
    case 'SAVED_RECIPE':
    console.log(action.payload)
    return{...state, savedRecipes: action.payload}
    case 'TOGGLE_SWITCH':
    return {...state, clicked: action.payload}
    case 'SHOW_FORM':
    return {...state, form: action.payload}
    case 'SHOW_DETAILS':
    return {...state, show: action.payload}
      default: return state
  }
}


export default reducer
