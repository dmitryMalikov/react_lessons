import React from 'react';
import Header from './Header';
import { shallow }  from '../../configs/enzime.config';

describe('renders correct Header', () =>
{
    it('should render correctly <Header/>', () => {
        const component = shallow(<Header/>);
        expect(component).toBeDefined();
    });
});