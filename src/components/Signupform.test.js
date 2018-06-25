import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import Signupform from './Signupform'

describe('Signup Form component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Signupform />
            </Provider>
        )
    })
})