import { createStore } from 'redux';
import { recipeReducer } from './reducers/recipe';

export default createStore(recipeReducer);