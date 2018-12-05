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

export const switchFunction=()=>{
  return dispatch => ({
      type: 'TOGGLE_SWITCH',
      payload: true
    })
  }


export const saves=()=>{
  return dispatch => {
    return fetch('http://localhost:3000/recipes', {
      method: "GET",
      headers: {
                'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }})
      .then(r=>r.json())
      .then(saved => dispatch({
    type: 'SAVED_RECIPE',
    payload: saved
    }))
  }
}

export const details=(recipe)=>{
  return dispatch => {
  return fetch(`https://api.yummly.com/v1/api/recipe/${recipe}?_app_id=422fb511&_app_key=bcc41cf5e1db329ad03dcf52a9121c9d`)
  .then(r=>r.json())
  .then(showed => dispatch({
    type: 'SHOW_DETAILS',
    payload: showed
    }))
  }
}


export const savedDetailsFunction=(recipe)=>{
  return dispatch => {
  return fetch(`http://localhost:3000/recipes/${recipe.id}`)
  .then(r=>r.json())
  .then(showed => dispatch({
    type: 'SHOW_SAVED_DETAILS',
    payload: showed
    }))
  }
}


export const showForm=()=>{
  return {
      type: 'SHOW_FORM',
      payload: true
    }
  }


  export const clearOnLogout=()=>{
    return {
      type: 'CLEAR_LOGOUT',
      payload:  []
    }
  }
