import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SignupForm from './SignupForm'
import './Signup.css'

export function Signup(props) {
   if(props.loggedIn){
        return <Redirect to="/discover" />
    }
    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <SignupForm loading={props.loading} />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading
});

export default connect(mapStateToProps)(Signup);
