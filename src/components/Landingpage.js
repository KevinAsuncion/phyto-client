import React, { Component } from 'react';
import './Landingpage.css'
import Hero from './Hero'
import Description from './Description'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export class Landingpage extends Component {
    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/discover" />;
        }
        return (
            <div className="landingpage-container">
                <Hero />
                <Description />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landingpage);