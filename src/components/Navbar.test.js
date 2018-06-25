import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import Navbar from './Navbar'

describe('Navbar component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Navbar />
            </Provider>
        )
    })
})