import React, { Component } from 'react';
import './Recipelist.css'
import Recipecard from './Recipecard'

export default class Recipelist extends Component {
    
    render() {
        const recipes = this.props.recipes 
        const recipesList = recipes.map((recipe, index) => {
            return <div className="recipe-card" key={index}>
                <Recipecard {...recipe}/>
            </div>
        })
        return (
            <div className="recipeslist-container">
               {recipesList}
            </div>
        );
    }
}