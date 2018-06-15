import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'
import {logout} from '../actions/recipe-actions'

export class Navbar extends Component {
    handleLogout(e){
        this.props.dispatch(logout());
    }

    render() {
        let navElements;
        if(!this.props.loggedIn){
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
                    <Link to="/"><li onClick={(e)=>this.handleLogout(e)}>Logout</li></Link>
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

const mapStateToProps = state =>({
    loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(Navbar)

