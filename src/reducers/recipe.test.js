import { recipeReducer } from './recipe';
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


describe('recipeReducer', () => {
    it('should return initial state when nothing is passed in', () => {
        const state = recipeReducer(undefined, { type: '_UNKNOWN' });
        expect(state).toEqual({
            recipes: [],
            favoriteRecipes: [],
            loading: false,
            error: false,
            searched: false,
            count: 0,
            prevSearchTerm: '',
            saved: false
        })
    })
    it('should return the current state on an unknown action', () => {
        let currentState = {}
        const state = recipeReducer(currentState, { type: '_UNKNOWN' });
        expect(state).toEqual(currentState);
    })
    it('should clear count', ()=>{
        let currentState = {
            count: 1
        }
        const state = recipeReducer(currentState, {type: 'CLEAR_COUNT'});
        expect(state).toEqual({
            count: 0
        })
    })
    it('should clear search results', ()=>{
        let currentState = {
            recipes: [
                {
                    title: 'title',
                    recipe_url: 'recipeurl',
                    image_url: 'imageurl'
                }
            ],
            searched: true,
            count: 2,
            prevSearchTerm: 'tomato',
            saved: true
        }
        const state = recipeReducer(currentState, {type: 'CLEAR_SEARCH_RESULTS'});
        expect(state).toEqual({
            recipes: [],
            searched: false,
            count: 0,
            prevSearchTerm: '',
            saved: false
        })
    })
    it('should set loading to true and error to false when getting saved recipes', ()=>{
        const currentState = {
            loading: false,
            error: false
        }
        const state = recipeReducer(currentState, {type:'GET_SAVED_RECIPES_REQUEST'})
        expect(state).toEqual({
            loading: true, 
            error: false
        })
    })
})
