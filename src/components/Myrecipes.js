import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './Requires-login'
import Recipelist from './Recipelist';
import './Myrecipes.css';

export class Myrecipes extends Component {
    
    render() {
        return (
            <div className="myrecipes-container">
                <div className="results-container">
                    <Recipelist recipes={this.props.myRecipes} type="myrecipes"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    myRecipes: state.recipe.favoriteRecipes
})

export default requiresLogin()(connect(mapStateToProps)(Myrecipes));
