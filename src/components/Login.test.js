import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Login from './Login';

describe('Login component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Login />
            </Provider>
        )
    })
})