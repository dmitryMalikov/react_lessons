import React, { Component } from 'react';
import FormResetPassword from "../../components/forms/form-reset-password/FormResetPassword";

class ResetPassword extends Component {

    render()
    {
        return (
            <div className="app-register">
                <FormResetPassword />
            </div>
        );
    }
}

export default ResetPassword;
