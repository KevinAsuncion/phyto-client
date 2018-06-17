import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form'
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Link } from 'react-router-dom';
import './Login.css'

export class Loginform extends Component {
    onSubmit(user) {
        return this.props.dispatch(login(user.username, user.password));
    }
    
    render () {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="login-form">
                <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                    <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            id="login-username"
                            type="text"
                            autoComplete="off"
                            name="username"
                            placeholder="Username"
                            validate={[required, nonEmpty]}
                        />
                    <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            id="login-password"
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            validate={[required, nonEmpty]}
                        />
                    {error}
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                     </button>
                    <p>New to Phyto? <Link to="/signup">Sign up</Link></p>
                </form>
            </div>
        )}
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Loginform);


