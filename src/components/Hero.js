import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Hero.css'


export default class Hero extends Component {
    render() {
        return (
          <div className="hero-container">
              <h2>Phyto helps you discover and save delicious plant based recipes.</h2>
                <Link to="/signup"><button>Sign up</button></Link> 
                <p>Already have an account? <Link to="/login"><span id="hero-login-link">Login</span></Link></p>
          </div>
        );
    }
}