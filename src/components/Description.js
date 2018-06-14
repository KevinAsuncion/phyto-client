import React, { Component } from 'react';
import './Description.css'


export default class Description extends Component {
    render() {
        return (
            <div className="description-container">
                <h2>How It Works</h2>
                <div className="description-card-container">
                    <div className="description-card">
                        <i className="fas fa-utensils"></i>
                        <p>Phyto is a simple app that helps people transition to a more plant based diet. </p>
                    </div>
                    <div className="description-card">
                        <i className="fas fa-search"></i>
                        <p>Search thousands of delicious plant based recipes to try!</p>
                    </div>
                    <div className="description-card">
                        <i className="far fa-bookmark"></i>
                        <p>Save your favorite recipes, and access them anytime with Phyto's simple bookmarking feature</p>
                    </div>
                </div> 
            </div>
        );
    }
}