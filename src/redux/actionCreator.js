export const fetchRecipe=()=>{
  return dispatch => {
    fetch(')
    .then(r=>r.json())
    .then(recipe => dispatch({
      type: 'FETCH_RECIPE',
      payload: recipe
    }))
  }
          
}


export const giveToAC=(searchedState)=>{
  return dispatch => {
    fetch(`=${searchedState}`)
    .then(r=>r.json())
    .then(recipe => dispatch({
      type: 'SEARCH_RECIPE',
      payload: recipe
    }))
  }
}
