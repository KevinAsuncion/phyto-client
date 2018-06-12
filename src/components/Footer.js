import React, { Component } from 'react';
import './Footer.css'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-info">
                    <i className="fab fa-github"></i>
                    <p>Built by Kevin Asuncion</p>
                </div>
            </div>
        );
    }
}