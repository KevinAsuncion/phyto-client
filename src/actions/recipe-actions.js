//Searchpage
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'
export const getSearchResults = () => ({
    type: GET_SEARCH_RESULTS
})

//Login
export const LOGIN = 'LOGIN'
export const login = () => ({
    type: LOGIN
})

//logout
export const LOGOUT = 'LOGOUT'
export const logout = () => ({
    type: LOGOUT
})

//Save favorite recipes
export const SAVE_RECIPE = 'SAVE_RECIPE'
export const saveRecipe = (savedRecipe) => ({
    type: SAVE_RECIPE,
    savedRecipe: savedRecipe
})

//Delete favorite recipes 
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const deleteRecipe = (title) => ({
    type: DELETE_RECIPE,
    title: title
})