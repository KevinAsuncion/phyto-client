import React from 'react';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import store from '../store'

import Requireslogin from './Requireslogin'

describe('Requireslogin component', () => {
    it('should render without crashing', () => {
        shallow(
            <Provider store={store}>
                <Requireslogin />
            </Provider>
        )
    })
})