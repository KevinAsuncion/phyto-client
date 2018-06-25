import React from 'react';
import { shallow } from 'enzyme'

import Loginform from './Loginform'

describe('Loginform component', () => {
    it('should render without crashing', () => {
        shallow(<Loginform />)
    })
})