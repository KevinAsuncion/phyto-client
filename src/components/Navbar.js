import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearSearchResults } from '../actions/recipe-actions';
import { clearAuthToken } from '../local-storage';
import {logout} from '../actions/recipe-actions';
import './NavBar.css';

export class NavBar extends Component {
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
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/login"> <li>Login</li></Link>
                    <Link to="/signup"> <li>Signup</li></Link>
                </ul> 
            );
        } else {
            navElements = (
                <ul>
                    <Link to="/discover"><li>Discover</li></Link>
                    <Link to="/myrecipes"><li onClick={()=> this.handleClick()}>My Recipes</li></Link>
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
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(NavBar)

