import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import Searchpage from './Searchpage'

describe('Searchpage component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Searchpage />
            </Provider>
        )
    })
})