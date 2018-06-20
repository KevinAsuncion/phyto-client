import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Landingpage from './Landingpage';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Searchpage from './Searchpage';
import Myrecipes from './Myrecipes';

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
              <Route exact path="/" component={Landingpage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/discover" component={Searchpage} />
              <Route exact path="/myrecipes" component={Myrecipes} />
            </Switch>
          </main> 
          <Footer /> 
        </div>
      </Router>
    );
  }
}



