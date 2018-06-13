import React, { Component } from 'react';
import './Recipelist.css'
import Recipecard from './Recipecard'

export default class Recipelist extends Component {
    
    render() {
        let btn
        if(this.props.type === "myrecipes"){
            btn = (
                <button className="delete-button"><i className="far fa-trash-alt" /> Delete</button> 
            )
        }else if (this.props.type === "searchrecipes"){
            btn = (
                <button className="save-button"><i className="far fa-heart" /> Save</button> 
            )
        }
       
        const recipes = this.props.recipes 
        const recipesList = recipes.map((recipe, index) => {
            return <div className="recipe-card-container" key={recipe.title}>
                <Recipecard {...recipe} />
                <div className="recipe-card-buttons">
                    {btn}
                    <button className="view-button"> <a href={recipe.recipe_url} target="_blank"><i class="far fa-eye"/> View</a></button>
                </div> 
            </div>
        })
        return (
            <div className="recipeslist-container">
               {recipesList}
            </div>
        );
    }
}