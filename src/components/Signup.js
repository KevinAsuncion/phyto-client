import React, { Component } from 'react';
import './Signup.css'


export default class Login extends Component {
    //TODO: handleSubmit => console.log(values)
    render() {
        return (
            <div className="signup-container">
                <h2>Signup</h2>
                <div className="signup-form">
                    <form>
                        <label>Full Name
                            <input
                                id="signup-fullname"
                                type="text"
                                autoComplete="off"
                                placeholder="Name"
                            />
                        </label>
                        <label>Username
                            <input
                                id="signup-username"
                                type="text"
                                autoComplete="off"
                                placeholder="Username"
                            />
                        </label>
                        <label>Password
                            <input
                                id="signup-password"
                                type="password"
                                placeholder="Enter password"
                            />
                        </label>
                        <label>Confirm Password
                            <input
                                id="signup-password-confirm"
                                type="password"
                                placeholder="Confirm password"
                            />
                        </label>
                        <button type="submit">Submit</button>
                        <p>Already have an account? Login</p>
                    </form>
                </div>
            </div>
        );
    }
}