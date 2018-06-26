import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearSearchResults } from '../actions/recipe-actions';
import { clearAuthToken } from '../local-storage';
import './Navbar.css';

export class Navbar extends Component {
    handleLogout(e){
        this.props.dispatch(clearSearchResults());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    handleClick(){
        this.props.dispatch(clearSearchResults());
    }

    render() {
        let navElements;
        if(!this.props.loggedIn){
            navElements = (
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul> 
            );
        } else {
            navElements = (
                <ul>
                    <li><Link to="/discover">Discover</Link></li>
                    <li onClick={() => this.handleClick()}><Link to="/myrecipes">My Recipes</Link></li>
                    <li onClick={(e) => this.handleLogout(e)}><Link to="/">Logout</Link></li>
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
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Navbar)

