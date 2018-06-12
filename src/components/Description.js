import React, { Component } from 'react';
import './Description.css'


export default class Description extends Component {
    render() {
        return (
            <div className="description-container">
                <h2>How It Works</h2>
                <div className="description-card-container">
                    <div className="description-card">
                        <i class="fas fa-search"></i>
                        <p>Discover delicious plant based recipes</p>
                    </div>
                    <div className="description-card">
                        <i class="far fa-bookmark"></i>
                        <p>Save your favorite recipes</p>
                    </div>
                    <div className="description-card">
                        <i class="far fa-plus-square"></i>
                        <p>Create your own plant based recipes</p>
                    </div>
                </div> 
            </div>
        );
    }
}