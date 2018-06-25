import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer'

describe('Footer component', ()=>{
    it('Should render without crashing', ()=>{
        shallow(<Footer />)
    })
})

