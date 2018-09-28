import React from 'react';
import FormResetPassword from './FormResetPassword';
import { shallow }  from '../../../configs/enzime.config';

describe('FormResetPassword', () =>
{
    it('should render correctly <FormResetPassword />', () => {
        const component = shallow(<FormResetPassword />);
        expect(component).toBeDefined();
    });
});