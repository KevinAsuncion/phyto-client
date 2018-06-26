import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Hero component', () => {
    it('should render without crashing', () => {
        shallow(<Hero />)
    })
})