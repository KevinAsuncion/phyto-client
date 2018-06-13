import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Landingpage from './Landingpage'
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Searchpage from './Searchpage'

export default class App extends Component {
  render() {
    return ( 
        <div className="App">
          <header>
            <h1 className="App-title">Phyto</h1>
            <Navbar/>
          </header>
          <main>
          <Footer /> 
            <Searchpage />
            <Landingpage /> 
            
          </main> 
          
          <Signup />   
          <Login />
        </div>
    );
  }
}


