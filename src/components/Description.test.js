import React from 'react';
import {shallow, mount} from 'enzyme';

import Description from './Description'

describe('Description component', ()=>{
    it('Should render without crashing', ()=>{
       shallow(<Description />);
    });
    it('Should render a description container', () => {
       const wrapper = shallow(<Description />);
       expect(wrapper.hasClass('description-container')).toEqual(true);
    });
})
