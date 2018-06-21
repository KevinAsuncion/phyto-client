import React, { Component } from 'react';
import './Footer.css'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-info">
                    <a href="https://www.linkedin.com/in/kevinramosasuncion/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/KevinAsuncion" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <p>Built by Kevin Asuncion</p>
                </div>
            </div>
        );
    }
}