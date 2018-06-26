import React from 'react';
import { shallow } from 'enzyme';
import Recipecard from './Recipecard';

describe('Recipecard component', () => {
    it('should render without crashing', () => {
        shallow(<Recipecard />)
    })
})