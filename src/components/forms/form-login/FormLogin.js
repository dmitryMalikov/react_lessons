import React, { Component } from 'react';
import FieldInput from "../../field-input/FieldInput";
import {NavLink} from "react-router-dom";

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail  = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }


    handleEmail(e) {
        this.setState({ email: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('An essay was submitted: ', this.state);
        event.preventDefault();
    }

    render() {
        return (
          <div className="container mt-lg-5">
              <div className="row justify-content-center">
                  <div className="col col-6">
                      <div className="card">
                          <h5 className="card-header text-center">Login</h5>
                          <div className="card-body">
                              <form onSubmit={this.handleSubmit}>
                                  <FieldInput
                                      inputType={'text'}
                                      label={'Email'}
                                      name={'email'}
                                      controlFunc={this.handleEmail}
                                      content={this.state.email}
                                  />
                                  <FieldInput
                                      inputType={'text'}
                                      label={'Password'}
                                      name={'password'}
                                      controlFunc={this.handlePassword}
                                      content={this.state.password}
                                  />
                                  <div className="d-flex justify-content-between">
                                      <NavLink className="btn btn-secondary" exact to="/reset-password">
                                          Reset password
                                      </NavLink>
                                      <button type="submit" className="btn btn-primary">Login</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default FormLogin;