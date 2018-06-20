import React from 'react';
import './Recipecard.css';

export default function Recipecard(props) {
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


