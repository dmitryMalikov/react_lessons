import React from 'react';
import Sidebar from './Sidebar';
import { shallow }  from '../../configs/enzime.config';

describe('renders correct Sidebar', () =>
{
    it('should render correctly <Sidebar/>', () => {
        const component = shallow(<Sidebar/>);
        expect(component).toBeDefined();
    });
});