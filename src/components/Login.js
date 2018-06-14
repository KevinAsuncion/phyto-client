import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/recipe-actions'
import './Login.css'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch(login());
    }
    render() {
        if(this.props.loggedIn){
            return <Redirect to="/discover" />
        }
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

const mapStateToProps= state =>({
    loggedIn: state.loggedIn
})
    
export default connect(mapStateToProps)(Login)


