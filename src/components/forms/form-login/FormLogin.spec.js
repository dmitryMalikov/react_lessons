import React from 'react';
import FormLogin from './FormLogin';
import { shallow }  from '../../../configs/enzime.config';

describe('FormLogin', () =>
{
    it('should render correctly <FormLogin />', () => {
        const component = shallow(<FormLogin />);
        expect(component).toBeDefined();
    });
});