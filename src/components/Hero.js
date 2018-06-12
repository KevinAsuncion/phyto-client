import React, { Component } from 'react';
import './Hero.css'


export default class Hero extends Component {
    render() {
        return (
          <div className="hero-container">
              <h2>Phyto helps you discover and save delicious plant based recipes.</h2>
              <button>Sign up</button>
              <p>Already have an account? Login</p>
          </div>
        );
    }
}