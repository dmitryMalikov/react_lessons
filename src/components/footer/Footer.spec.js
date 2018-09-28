import React from 'react';
import Footer from './Footer';
import { shallow }  from '../../configs/enzime.config';

describe('renders correct Footer', () =>
{
    it('should render correctly <Footer/>', () => {
        const component = shallow(<Footer/>);
        expect(component).toBeDefined();
    });
});