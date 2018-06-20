import React from 'react';
import { connect } from 'react-redux';
import Loginform from './Loginform';
import { Redirect } from 'react-router-dom';
import './Login.css';

export function Login(props) {
    if(props.loggedIn){
        return <Redirect to="/discover" />
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <Loginform loading={props.loading}/>
            <div>
                <p>Demo Account</p>
                <p>Username: demouser</p>
                <p>Password: demopassword</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading 
});

export default connect(mapStateToProps)(Login);

    


