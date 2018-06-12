import React, { Component } from 'react';
import './Login.css'


export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <h2>Login</h2>
                <div className="login-form">
                    <form>
                        <label>Username
                            <input 
                                id="login-username"
                                type="text"
                            /> 
                        </label>
                        <label>Password
                            <input
                                id="login-password"
                                type="text"
                            />
                        </label>
                        <button type="submit">Submit</button>
                        <p>New to Phyto? Sign up</p>
                    </form> 
                </div>
            </div>
        );
    }
}