import { 
    GET_SEARCH_RESULTS_SUCCESS,  
    GET_SAVED_RECIPES_SUCCESS,
    CLEAR_SEARCH_RESULTS, 
    GET_SEARCH_REQUEST,
    GET_SEARCH_REQUEST_ERROR,
    GET_SAVED_RECIPES_REQUEST,
    GET_SAVED_RECIPES_REQUEST_ERROR,
    SAVE_RECIPE_SUCCESS,
    SAVE_RECIPE_ERROR,
    SAVE_RECIPE_REQUEST,
    CLEAR_COUNT
} from '../actions/recipe-actions'

const initialState = {
    recipes: [],
    favoriteRecipes: [],
    loading: false,
    error: false,
    searched: false,
    count: 0, 
    prevSearchTerm: '',
    saved: false
};

export const recipeReducer = (state = initialState, action) => {
    if(action.type === GET_SEARCH_RESULTS_SUCCESS){
        return Object.assign({}, state, { 
            recipes: action.recipes,
            loading: false,
            searched: true,
            count:  state.count + 12,
            prevSearchTerm:  action.searchTerm,
            saved: false
        })
    } else if (action.type === CLEAR_SEARCH_RESULTS){
        return Object.assign({}, state, {
            recipes: [],
            searched: false,
            count: 0,
            prevSearchTerm: '',
            saved: false
        })
    } else if (action.type === GET_SAVED_RECIPES_SUCCESS){
        return Object.assign({},state, {
            favoriteRecipes: action.savedRecipes,
            loading: false,
            error: false, 
            searched: false,
            saved: false
        })
    } else if (action.type === GET_SEARCH_REQUEST) {
        return Object.assign({},state, {
            loading: true,
            error: false,
            saved: false
        })
    } else if (action.type === GET_SEARCH_REQUEST_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: true,
            count: 0,
            prevSearchTerm: ''
        })
    } else if(action.type === GET_SAVED_RECIPES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: false
        })
    } else if(action.type === GET_SAVED_RECIPES_REQUEST_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: true
        })
    } else if(action.type === CLEAR_COUNT) {
        return Object.assign({}, state, {
            count: 0
        })
    } else if (action.type === SAVE_RECIPE_SUCCESS) {
        return Object.assign({}, state, {
            saved: true,
            loading: false,
            error: false
        })
    } else if (action.type === SAVE_RECIPE_ERROR) {
        return Object.assign({}, state, {
            saved: true,
            loading: false,
            error: true
        })
    } else if (action.type === SAVE_RECIPE_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: false
        })
    }
    return state;
};


