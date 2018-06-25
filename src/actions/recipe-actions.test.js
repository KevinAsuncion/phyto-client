import {
    getSearchResultsSuccess,
    GET_SEARCH_RESULTS_SUCCESS,
    getSavedRecipesSuccess,
    GET_SAVED_RECIPES_SUCCESS,
    clearSearchResults,
    CLEAR_SEARCH_RESULTS,
    getSearchRequest,
    GET_SEARCH_REQUEST,
    getSearchRequestError,
    GET_SEARCH_REQUEST_ERROR,
    getSavedRecipesRequest,
    GET_SAVED_RECIPES_REQUEST,
    getSavedRecipesRequestError,
    GET_SAVED_RECIPES_REQUEST_ERROR,
    saveRecipeSuccess,
    SAVE_RECIPE_SUCCESS,
    saveRecipeError,
    SAVE_RECIPE_ERROR,
    saveRecipeRequest,
    SAVE_RECIPE_REQUEST,
    clearCount,
    CLEAR_COUNT,
    DELETE_SAVED_RECIPE_ERROR,
    deleteSavedRecipeError, 
    DELETE_SAVED_RECIPE_REQUEST,
    deleteSavedRecipeRequest
} from './recipe-actions'

describe('getSearchResultSuccess', () => {
    it('Should return the action', () => {
        const recipes = [
            {
                title:'title',
                recipe_url: 'recipeurl',
                image_url: 'imageurl'
            }
        ]
        const searchTerm = 'tomato'
        const action = getSearchResultsSuccess(recipes,searchTerm);
        expect(action.type).toEqual(GET_SEARCH_RESULTS_SUCCESS);
        expect(action.recipes).toEqual(recipes)
        expect(action.searchTerm).toEqual(searchTerm)
    })
})

describe('getSavedRecipesSuccess', () => {
    it('Should return the action', () => {
        const savedRecipes = [
            {
                title: 'title',
                recipe_url: 'recipeurl',
                image_url: 'imageurl'
            }
        ]
        const action = getSavedRecipesSuccess(savedRecipes);
        expect(action.type).toEqual(GET_SAVED_RECIPES_SUCCESS);
        expect(action.savedRecipes).toEqual(savedRecipes)
    })
})

describe('clearSearchResults', () => {
    it('Should return the action', () => {
        const action = clearSearchResults();
        expect(action.type).toEqual(CLEAR_SEARCH_RESULTS);
    })
})

describe('getSearchRequest', () => {
    it('Should return the action', () => {
        const action = getSearchRequest();
        expect(action.type).toEqual(GET_SEARCH_REQUEST);
    })
})

describe('getSearchRequestError', () => {
    it('Should return the action', () => {
        const action = getSearchRequestError();
        expect(action.type).toEqual(GET_SEARCH_REQUEST_ERROR);
    })
})

describe('getSavedRecipesRequest', () => {
    it('Should return the action', () => {
        const action = getSavedRecipesRequest();
        expect(action.type).toEqual(GET_SAVED_RECIPES_REQUEST);
    })
})

describe('getSavedRecipesRequestError', () => {
    it('Should return the action', () => {
        const action = getSavedRecipesRequestError();
        expect(action.type).toEqual(GET_SAVED_RECIPES_REQUEST_ERROR);
    })
})

describe('saveRecipeSuccess', () => {
    it('Should return the action', () => {
        const action = saveRecipeSuccess();
        expect(action.type).toEqual(SAVE_RECIPE_SUCCESS);
    })
})

describe('saveRecipeError', () => {
    it('Should return the action', () => {
        const action = saveRecipeError();
        expect(action.type).toEqual(SAVE_RECIPE_ERROR);
    })
})

describe('saveRecipeRequest', () => {
    it('Should return the action', () => {
        const action = saveRecipeRequest();
        expect(action.type).toEqual(SAVE_RECIPE_REQUEST);
    })
})

describe('clearCount', () => {
    it('Should return the action', () => {
        const action = clearCount();
        expect(action.type).toEqual(CLEAR_COUNT);
    })
})

describe('deleteSavedRecipeRequest', () => {
    it('Should return the action', () => {
        const action = deleteSavedRecipeRequest();
        expect(action.type).toEqual(DELETE_SAVED_RECIPE_REQUEST);
    })
})

describe('deleteSavedRecipeError', () => {
    it('Should return the action', () => {
        const action = deleteSavedRecipeError();
        expect(action.type).toEqual(DELETE_SAVED_RECIPE_ERROR);
    })
})