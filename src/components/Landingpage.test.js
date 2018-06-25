import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import Landingpage from './Landingpage'

describe('Landingpage component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Landingpage />
            </Provider>
        )
    })
})