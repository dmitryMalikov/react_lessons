import React from 'react';
import Login from './Login';
import { shallow }  from '../../configs/enzime.config';

describe('renders correct Login', () =>
{
    it('should render correctly <Login/>', () => {
        const component = shallow(<Login/>);
        expect(component).toBeDefined();
    });
});