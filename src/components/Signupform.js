import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { signupUser } from '../actions/signup-actions';
import { login } from '../actions/auth';
import { Link } from 'react-router-dom';
import Input from './Input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class Signupform extends Component {
    onSubmit(values){
        const {fullname, username, password} = values;
        const user = {fullname, username, password}
        return this.props 
            .dispatch(signupUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
      
        return (

            <div className="signup-form">
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <label htmlFor="fullname">Full Name</label>
                            <Field 
                            component={Input}
                            id="signup-fullname"
                            type="text"
                            autoComplete="off"
                            placeholder="Full Name"
                            name="fullname"
                        />
                    <label htmlFor="username">Username</label>
                            <Field
                            component={Input}
                            id="signup-username"
                            type="text"
                            autoComplete="off"
                            placeholder="Username"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
    
                    <label htmlFor="password">Password</label>
                            <Field 
                            component={Input}
                            id="signup-password"
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            validate={[required, nonEmpty, matchesPassword, passwordLength]}
                        />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field
                            component={Input}
                            id="signup-password-confirm"
                            type="password"
                            placeholder="Enter password again"
                            name="confirmPassword"
                            validate={[required, nonEmpty, matchesPassword, passwordLength]}
                        />
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        {this.props.loading ? "Loading..." : "Sign up"}
                     </button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(Signupform);
