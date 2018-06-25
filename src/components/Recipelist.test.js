import React from 'react';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import store from '../store';

import Recipelist from './Recipelist'

describe('Recipelist component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Recipelist />
            </Provider>
        )
    })
})