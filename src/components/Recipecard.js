import React from 'react';
import './Recipecard.css';

export default function Recipecard(props) {
    return (
        <div className="recipe-card">
            <img src={props.image_url} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    );
};


