import React from 'react';
import FieldInput from './FieldInput';
import { shallow }  from '../../configs/enzime.config';

describe('FieldInput', () =>
{
    it('should render correctly <FieldInput />', () => {

        const handleEmail = (e) => {
            return { password: 'value' }
        };

        const component = shallow(
            <FieldInput
                inputType={'text'}
                label={'Password'}
                name={'password'}
                controlFunc={handleEmail}
                content={'value'}
            />
        );

        expect(component.html()).contains('Password');
    });
});