import React from 'react';
import Register from './Register';
import { shallow }  from '../../configs/enzime.config';

describe('Register', () =>
{
    it('should render correctly <Register/>', () => {
        const component = shallow(<Register/>);
        expect(component).toBeDefined();
    });
});