import React, { Component } from 'react';
import Recipecard from './Recipecard';
import { connect } from 'react-redux';
import { saveRecipe, deleteSavedRecipe } from '../actions/recipe-actions';
import './Recipelist.css';

export class Recipelist extends Component {
    handleSave(e){
       const image_url = e.target.parentNode.previousSibling.firstElementChild.getAttribute('src')
       const title = e.target.parentNode.previousSibling.lastElementChild.textContent
       const recipe_url = e.target.nextSibling.getAttribute('href')
       const savedRecipe = {
           image_url: image_url,
           title: title,
           recipe_url: recipe_url 
       }
       this.props.dispatch(saveRecipe(savedRecipe))
    }

    handleDelete(e){
        const id = e.target.parentNode.previousSibling.firstElementChild.getAttribute('data-id')
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
                <div className="recipe-card-buttons">
                    {btn}
                    <a href={recipe.recipe_url} target="_blank"><button className="view-button">View</button></a>
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