import React, { Component } from 'react';
import FormLogin from "../../components/forms/form-login/FormLogin";

class Login extends Component {

    render()
    {
        return (
            <div className="app-login">
                <FormLogin />
            </div>
        );
    }
}

export default Login;
