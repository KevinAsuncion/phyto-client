import { API_BASE_URL } from '../config'
import { normalizeResponseErrors} from './utils'

//SEARCHPAGE
export const getSearchResults = (searchTerm, count) => dispatch => {
    //dispatch search request
    const APP_ID = '54f6a76e'
    const APP_KEY = 'ed9fa62cc29a1ae5e51dff6c1f623e40'
    return fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}&health=vegan&health=alcohol-free&to=12`)
        .then((res) => res.json())
        .then(res => res.hits.map(item=>{
            return {
                image_url: item.recipe.image,
                title: item.recipe.label,
                recipe_url: item.recipe.url
            } 
        }))
        .then(recipes => dispatch(getSearchResultsSuccess(recipes)))
        .catch(err=>{
            //dispatcherror
            //dispatch - not loading 
            console.error(err)
        })
} 

export const GET_SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const getSearchResultsSuccess = recipes => ({
    type: GET_SEARCH_RESULTS_SUCCESS,
    recipes
});

//Save favorite recipes

export const saveRecipe = savedRecipe => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipes`, {
        method: 'POST',
        body: JSON.stringify(savedRecipe),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err=> {
        console.error(err.message);
    })
}

// export const SAVED_RECIPE_SUCCESS = 'SAVED_RECIPE_SUCCESS'
// export const savedRecipeSuccess = savedRecipe => ({
//     type: SAVED_RECIPE_SUCCESS,
//     savedRecipe
// })


//Get Favorite Recipes 
export const getSavedRecipes = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipes`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
    .then(res => res.json())
    .then(res => dispatch(getSavedRecipesSuccess(res.recipes)))
    .catch(err => {
        console.error(err);
    })
}

export const GET_SAVED_RECIPES_SUCCESS = 'GET_SAVED_RECIPES_SUCCESS'
export const getSavedRecipesSuccess = (savedRecipes) => ({
    type: GET_SAVED_RECIPES_SUCCESS,
    savedRecipes
})


//Delete favorite recipes 

export const deleteSavedRecipe = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/recipes/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(res => dispatch(getSavedRecipes()))
        .catch(err => {
            console.error(err);
        })
}

// export const DELETE_SAVED_RECIPE_SUCCESS = 'DELETE_SAVED_RECIPE_SUCCESS'
// export const deleteSavedRecipeSuccess = (id) => ({
//     type: DELETE_SAVED_RECIPE_SUCCESS,
//     id
// })

