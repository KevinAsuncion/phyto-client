import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Signup from './Signup';

describe('Signup component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Signup />
            </Provider>
        )
    })
})