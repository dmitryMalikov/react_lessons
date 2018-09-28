import React from 'react';
import Dashboard from './Dashboard';
import { shallow }  from '../../configs/enzime.config';

describe('renders correct Dashboard', () =>
{
    it('should render correctly <Dashboard/>', () => {
        const component = shallow(<Dashboard/>);
        expect(component).toBeDefined();
    });
});