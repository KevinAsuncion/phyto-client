import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state ={
            loggedIn: true
        }
    }
    render() {
        let navElements;
        if(this.state.loggedIn){
            navElements = (
                <ul>
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/login"> <li>Login</li></Link>
                    <Link to="/signup"> <li>Signup</li></Link>
                </ul> 
            );
        } else {
            navElements = (
                <ul>
                    <Link to="/discover"><li>Discover</li></Link>
                    <Link to="/myrecipes"><li>My Recipes</li></Link>
                    <Link to="/"><li>Logout</li></Link>
                </ul>  
            )
        }
        return (
           <nav className="nav-bar-container">
              {navElements}
            </nav>
        );
    }
}

