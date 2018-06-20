import React from 'react';
import './RecipeCard.css';

export default function RecipeCard(props) {
    if(props.id){
        return (
            <div className="recipe-card">
                <span data-id={props.id}></span>
                <img src={props.image_url} alt={props.title} />
                <p>{props.title}</p>
            </div>
        );
    }
    return (
        <div className="recipe-card">
            <img src={props.image_url} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    );
};


