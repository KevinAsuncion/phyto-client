import { LOGIN, GET_SEARCH_RESULTS, LOGOUT} from '../actions/recipe-actions'

var searchResults = [
    {
        image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
        title: "Roasted Vegetables 1",
        recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
    },
    {
        image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
        title: "Roasted Vegetables 2",
        recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
    },
    {
        image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
        title: "Roasted Vegetables 3",
        recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
    },
    {
        image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
        title: "Roasted Vegetables 4",
        recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
    }
]

const savedRecipes = []

const initialState = {
    recipes: [],
    favoriteRecipes: [
        {
            image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
            title: "Roasted Vegetables 5",
            recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables",
        },
        {
            image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
            title: "Roasted Vegetables 6",
            recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables",
        },
        {
            image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
            title: "Roasted Vegetables 7",
            recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
        },
        {
            image_url: "https://d3awvtnmmsvyot.cloudfront.net/api/file/ajeSZmvPRrKzJw8p9FNL/convert?fit=crop&w=300&h=200&quality=60&cache=true&rotate=exif&compress=true",
            title: "Roasted Vegetables 8",
            recipe_url: "https://www.chefsteps.com/activities/tips-tricks-perfect-roasted-vegetables"
        }
    ],
    loggedIn: false
};

export const recipeReducer = (state = initialState, action) => {
    if(action.type === GET_SEARCH_RESULTS){
        return Object.assign({}, state, { 
           recipes: searchResults
        })
    } else if (action.type === LOGIN) {
        return Object.assign({}, state, {
            loggedIn: true 
        })
    } else if (action.type === LOGOUT) {
        return Object.assign({}, state, {
            loggedIn: false
        })
    } 

    // else if(action.type === SAVE_RECIPE){
    //     Object.assign({},state,{
    //         favoriteRecipes: [...favoriteRecipes, recipe ] 
    //     })   
    // }
    // else if (action.type === DELETE_RECIPE) {
    //     return Object.assign({}, state, {
    //         loggedIn: true
    //     })
    // }
    return state;
};


