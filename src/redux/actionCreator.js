export const fetchRecipe=()=>{
  return dispatch => {
    fetch('https://api.yummly.com/v1/api/recipes?_app_id=422fb511&_app_key=bcc41cf5e1db329ad03dcf52a9121c9d')
    .then(r=>r.json())
    .then(recipe => dispatch({
      type: 'FETCH_RECIPE',
      payload: recipe
    }))
  }
}


export const giveToAC=(searchedState)=>{
  return dispatch => {
    fetch(`https://api.yummly.com/v1/api/recipes?_app_id=422fb511&_app_key=bcc41cf5e1db329ad03dcf52a9121c9d&q=${searchedState}`)
    .then(r=>r.json())
    .then(recipe => dispatch({
      type: 'SEARCH_RECIPE',
      payload: recipe
    }))
  }
}
