import React from 'react';
import ResetPassword from './ResetPassword';
import { shallow }  from '../../configs/enzime.config';

describe('ResetPassword', () =>
{
    it('should render correctly <ResetPassword/>', () => {
        const component = shallow(<ResetPassword/>);
        expect(component).toBeDefined();
    });
});