import { API_BASE_URL, API_ID, API_KEY } from '../config'

//Searchpage
export const getSearchResults = (searchTerm,count) => dispatch => {
    dispatch(getSearchRequest())
    const searchCount = count === 0 ? 12 : count + 12 
    return fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}&health=vegan&health=alcohol-free&to=${searchCount}`)
    .then((res) => res.json())
    .then(res => res.hits.map(item=>{
        return {
            image_url: item.recipe.image,
            title: item.recipe.label,
            recipe_url: item.recipe.url
        } 
    }))
    .then(recipes =>{
        if(recipes.length === 0 ){
            dispatch(getSearchRequestError())
        } else {
            dispatch(getSearchResultsSuccess(recipes, searchTerm))
        }
    })
    .catch(err=>{
        dispatch(getSearchRequestError())
    })
} 

export const GET_SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const getSearchResultsSuccess = (recipes,searchTerm) => ({
    type: GET_SEARCH_RESULTS_SUCCESS,
    recipes,
    searchTerm 
});

export const CLEAR_COUNT = 'CLEAR_COUNT';
export const clearCount = () => ({
    type: CLEAR_COUNT
});

export const GET_SEARCH_REQUEST = 'GET_SEARCH_REQUEST';
export const getSearchRequest = () => ({
    type: GET_SEARCH_REQUEST
});

export const GET_SEARCH_REQUEST_ERROR = 'GET_SEARCH_REQUEST_ERROR';
export const getSearchRequestError = () => ({
    type: GET_SEARCH_REQUEST_ERROR
});

//Save Favorite Recipes
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
    .then(() => dispatch(saveRecipeSuccess())) 
    .catch(err=> {
        dispatch(saveRecipeError())
    })
}

export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPE_SUCCESS'
export const saveRecipeSuccess = () => ({
    type: SAVE_RECIPE_SUCCESS
})

export const SAVE_RECIPE_ERROR = 'SAVE_RECIPE_ERROR'
export const saveRecipeError = () => ({
    type: SAVE_RECIPE_ERROR
})

export const SAVE_RECIPE_REQUEST = 'SAVE_RECIPE_REQUEST';
export const saveRecipeRequest = () => ({
    type: SAVE_RECIPE_REQUEST
});

//Get Favorite Recipes
export const getSavedRecipes = () => (dispatch, getState) => {
    dispatch(getSavedRecipesRequest())
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
        dispatch(getSavedRecipesRequestError())
    })
}

export const GET_SAVED_RECIPES_REQUEST = 'GET_SAVED_RECIPES_REQUEST'
export const getSavedRecipesRequest = () => ({
    type: GET_SAVED_RECIPES_REQUEST
})

export const GET_SAVED_RECIPES_SUCCESS = 'GET_SAVED_RECIPES_SUCCESS'
export const getSavedRecipesSuccess = (savedRecipes) => ({
    type: GET_SAVED_RECIPES_SUCCESS,
    savedRecipes
})

export const GET_SAVED_RECIPES_REQUEST_ERROR = 'GET_SAVED_RECIPES_REQUEST_ERROR'
export const getSavedRecipesRequestError = () => ({
    type: GET_SAVED_RECIPES_REQUEST_ERROR
})

//Delete favorite recipes 
export const deleteSavedRecipe = (id) => (dispatch, getState) => {
    dispatch(deleteSavedRecipeRequest())
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
        dispatch(deleteSavedRecipeError());
    })
}

export const DELETE_SAVED_RECIPE_ERROR = 'DELETE_SAVED_RECIPE_ERROR'
export const deleteSavedRecipeError = () => ({
    type: DELETE_SAVED_RECIPE_ERROR
})

export const DELETE_SAVED_RECIPE_REQUEST = 'DELETE_SAVED_RECIPE_REQUEST'
export const deleteSavedRecipeRequest = () =>({
    type: DELETE_SAVED_RECIPE_REQUEST
})

//Clear Search Results 
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

