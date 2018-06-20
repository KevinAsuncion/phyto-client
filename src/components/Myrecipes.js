import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './RequiresLogin'
import Recipelist from './RecipeList';
import { getSavedRecipes } from '../actions/recipe-actions'
import './MyRecipes.css';

export class MyRecipes extends Component {
    componentDidMount(){
        this.props.dispatch(getSavedRecipes());
    }
    render() {
        let error, loader
        if(this.props.error){
            error = <div className="myrecipes-error">Looks like there was an error. Refresh the page or come back later.</div>
        }
        if(this.props.loading){
            loader = <div className="myrecipes-loader">Loading...</div>
        }
        return (
            <div className="myrecipes-container">
                <div className="results-container">
                    {error}
                    {loader}
                    <Recipelist recipes={this.props.favoriteRecipes} type="myrecipes"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favoriteRecipes: state.recipe.favoriteRecipes,
    error: state.recipe.error,
    loading: state.recipe.loading
})

export default requiresLogin()(connect(mapStateToProps)(MyRecipes));
