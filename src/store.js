import { createStore } from 'redux';
import { recipeReducer } from './reducers/recipe';

const store = createStore(recipeReducer);
export default store;