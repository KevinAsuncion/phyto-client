import React from 'react';
import { connect } from 'react-redux';
import  Loginform  from './Login-form'
import { Redirect } from 'react-router-dom'
import './Login.css'

export function Login(props) {
    if(props.loggedIn){
        return <Redirect to="/discover" />
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <Loginform />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);

    


