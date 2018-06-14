import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/recipe-actions'
import './Login.css'


export class Login extends Component {
    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch(login());
    }
    render() {
        return (
            <div className="login-container">
                <h2>Login</h2>
                <div className="login-form">
                    <form onSubmit={(e)=> this.handleSubmit(e) }>
                        <label>Username
                            <input 
                                id="login-username"
                                type="text"
                                autoComplete="off"
                                placeholder="Username"
                            /> 
                        </label>
                        <label>Password
                            <input
                                id="login-password"
                                type="password"
                                placeholder="Enter password"
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

export default connect()(Login)