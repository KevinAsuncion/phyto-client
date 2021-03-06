import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => Component => {
    function Requireslogin(props) {
        const { authenticating, loggedIn, error, ...passThroughProps } = props;
        if (authenticating) {
            return <div>Logging in...</div>;
        } else if (!loggedIn || error) {
            return <Redirect to="/" />;
        }

        return <Component {...passThroughProps} />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    Requireslogin.displayName = `Requireslogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.loading,
        loggedIn: state.auth.currentUser !== null,
        error: state.auth.error
    });

    return connect(mapStateToProps)(Requireslogin);
};
