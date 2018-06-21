import React, { Component } from 'react';
import Recipecard from './Recipecard';
import { connect } from 'react-redux';
import { saveRecipe, deleteSavedRecipe } from '../actions/recipe-actions';
import './Recipelist.css';

export class Recipelist extends Component {
   
    handleSave(e){
       const savedRecipe = {
            image_url: e.target.parentNode.getAttribute('data-image'),
            recipe_url: e.target.parentNode.getAttribute('data-url'),
            title: e.target.parentNode.getAttribute('data-title')
        }
        this.props.dispatch(saveRecipe(savedRecipe))
    }

    handleDelete(e){
        const id = e.target.parentNode.previousSibling.getAttribute('data-id')
        this.props.dispatch(deleteSavedRecipe(id));
    }
   
    render() {
        
        let btn
        if(this.props.type === "myrecipes"){
            btn = (
                <button className="delete-button" onClick={(e) => this.handleDelete(e)}>Delete</button> 
            )
        } else if (this.props.type === "searchrecipes"){
            btn = (
                <button className="save-button" onClick={(e)=>this.handleSave(e)}>Save</button> 
            )
        }
    
        const recipes = this.props.recipes 
        const recipesList = recipes.map((recipe, index) => {
            return <div className="recipe-card-container" key={index}>
                <Recipecard {...recipe} />
                <div className="recipe-card-buttons" data-url={recipe.recipe_url} data-image={recipe.image_url} data-title={recipe.title}>
                    {btn} 
                    <a href={recipe.recipe_url} target="_blank" rel="noopener noreferrer"><button className="view-button">View</button></a>
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


export default connect()(Recipelist)