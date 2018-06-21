import { API_BASE_URL, API_ID, API_KEY } from '../config'

//SEARCHPAGE
export const getSearchResults = (searchTerm) => dispatch => {
    dispatch(getSearchRequest())
    return fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}&health=vegetarian&health=alcohol-free&to=12`)
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
            dispatch(getSearchRequestError())
            console.error(err)
        })
} 

export const GET_SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const getSearchResultsSuccess = recipes => ({
    type: GET_SEARCH_RESULTS_SUCCESS,
    recipes
});

export const GET_SEARCH_REQUEST = 'GET_SEARCH_REQUEST';
export const getSearchRequest = () => ({
    type: GET_SEARCH_REQUEST
});

export const GET_SEARCH_REQUEST_ERROR = 'GET_SEARCH_REQUEST_ERROR';
export const getSearchRequestError = () => ({
    type: GET_SEARCH_REQUEST_ERROR
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
        console.error(err);
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

//Clear Search Results 

export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

