import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Description from './Description';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return ( 
        <div className="App">
          <header>
            <h1 className="App-title">Phyto</h1>
            <Navbar/>
          </header>
          <main>
            <Hero/>
            <Description/>
          </main> 
          <Footer/>
        </div>
    );
  }
}


