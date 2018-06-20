import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import SearchPage from './SearchPage';
import MyRecipes from './MyRecipes';

export default class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="App">
          <header>
          <h1 className="App-title"><i className="fas fa-leaf"></i>Phyto</h1>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/discover" component={SearchPage} />
              <Route exact path="/myrecipes" component={MyRecipes} />
            </Switch>
          </main> 
          <Footer /> 
        </div>
      </Router>
    );
  }
}



