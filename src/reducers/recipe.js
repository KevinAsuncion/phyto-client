import { 
    GET_SEARCH_RESULTS_SUCCESS, 
    SAVED_RECIPE_SUCCESS, 
    DELETE_RECIPE,
    GET_SAVED_RECIPES_SUCCESS,
    // DELETE_SAVED_RECIPE_SUCCESS
} from '../actions/recipe-actions'

const initialState = {
    recipes: [],
    favoriteRecipes: [],
};

export const recipeReducer = (state = initialState, action) => {
    if(action.type === GET_SEARCH_RESULTS_SUCCESS){
        console.log(action.recipes)
        return Object.assign({}, state, { 
           recipes: action.recipes
        })
    // } else if(action.type === SAVED_RECIPE_SUCCESS){
    //     return Object.assign({}, state, {
    //         favoriteRecipes: [...state.favoriteRecipes, action.savedRecipe] 
    //     })   
    // } else if (action.type === DELETE_SAVED_RECIPE_SUCCESS) {
    //     return Object.assign({}, state, {
    //         favoriteRecipes: state.favoriteRecipes.fitler((recipe) => {
    //             recipe.id !== action.id
    //         })
    //     })
    } else if (action.type === GET_SAVED_RECIPES_SUCCESS){
        return Object.assign({},state, {
            favoriteRecipes: action.savedRecipes
        })
    }
    return state;
};


