import React, { Component } from 'react';
import Recipecard from './Recipecard';
import { connect } from 'react-redux';
import { saveRecipe, deleteSavedRecipe } from '../actions/recipe-actions';
import './Recipelist.css';

export class Recipelist extends Component {
   
    handleSave(e){
        const card = e.target
        const savedRecipe = {
            image_url: card.getAttribute('data-image'),
            recipe_url: card.getAttribute('data-url'),
            title: card.getAttribute('data-title')
        }
        this.props.dispatch(saveRecipe(savedRecipe))
    }

    handleDelete(e){
        const id = e.target.getAttribute('data-id')
        this.props.dispatch(deleteSavedRecipe(id));
    }

    handleButtons(recipe){
        let btn
        if (this.props.type === "myrecipes") {
            return btn =
                <div className="recipe-card-buttons">
                    <button 
                        data-id={recipe.id} 
                        className="delete-button" 
                        onClick={(e) => this.handleDelete(e)}>
                        Delete</button>
                    <a href={recipe.recipe_url} target="_blank" rel="noopener noreferrer"><button className="view-button">View</button></a>
                </div>
        } else if (this.props.type === "searchrecipes") {
           return btn =
               <div className="recipe-card-buttons">
                    <button 
                        data-url={recipe.recipe_url} 
                        data-image={recipe.image_url} 
                        data-title={recipe.title} 
                        className="save-button"
                        onClick={(e) => this.handleSave(e)}>
                        Save</button>
                    <a href={recipe.recipe_url} target="_blank" rel="noopener noreferrer"><button className="view-button">View</button></a>
                </div>
        }
    }
   
    render() {
        const recipes = this.props.recipes 
        const recipesList = recipes.map((recipe, index) => {
            return <div className="recipe-card-container" key={index}>
                <Recipecard {...recipe} />
                {this.handleButtons(recipe)}
            </div>
        })
        return (
            <div className="recipeslist-container">
               {recipesList}
            </div>
        );
    }
}



export default connect()(Recipelist)