import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
           <nav className="nav-bar-container">
               <ul>
                   <li>Login</li>
                    <li>Signup</li>
                    <li hidden>Logout</li>
               </ul> 
            </nav>
        );
    }
}

