import React, { Component } from 'react';
import './Landingpage.css'
import Hero from './Hero'
import Description from './Description'


export default class Landingpage extends Component {
    render() {
        return (
            <div className="landingpage-container">
                <Hero />
                <Description />
            </div>
        );
    }
}