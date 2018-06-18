import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './Requires-login'
import Recipelist from './Recipelist';
import { getSavedRecipes } from '../actions/recipe-actions'
import './Myrecipes.css';

export class Myrecipes extends Component {
    componentDidMount(){
        this.props.dispatch(getSavedRecipes());
    }
    render() {
        return (
            <div className="myrecipes-container">
                <div className="results-container">
                    <Recipelist recipes={this.props.favoriteRecipes} type="myrecipes"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favoriteRecipes: state.recipe.favoriteRecipes
})

export default requiresLogin()(connect(mapStateToProps)(Myrecipes));
