import { 
    GET_SEARCH_RESULTS_SUCCESS, 
    SAVED_RECIPE_SUCCESS, 
    DELETE_RECIPE,
    GET_SAVED_RECIPES_SUCCESS,
    CLEAR_SEARCH_RESULTS, 
    GET_SEARCH_REQUEST
    // DELETE_SAVED_RECIPE_SUCCESS
} from '../actions/recipe-actions'

const initialState = {
    recipes: [],
    favoriteRecipes: [],
    loading: false,
    error: false
};

export const recipeReducer = (state = initialState, action) => {
    if(action.type === GET_SEARCH_RESULTS_SUCCESS){
        return Object.assign({}, state, { 
            recipes: action.recipes,
            loading: false
        })
    } else if (action.type === CLEAR_SEARCH_RESULTS){
        return Object.assign({}, state, {
            recipes: []
        })
    } else if (action.type === GET_SAVED_RECIPES_SUCCESS){
        return Object.assign({},state, {
            favoriteRecipes: action.savedRecipes,
            
        })
    } else if (action.type === GET_SEARCH_REQUEST) {
        return Object.assign({},state, {
            loading: true
        })
    }
    return state;
};


