import React from 'react';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import store from '../store';

import Myrecipes from './Myrecipes'

describe('Myrecipes component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Myrecipes />
            </Provider>
        )
    })
})