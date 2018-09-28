import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./containers/dashboard/Dashboard";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import ResetPassword from "./containers/reset-password/ResetPassword";

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Dashboard} />
                <Route  path="/login" component={Login} />
                <Route  path="/register" component={Register} />
                <Route  path="/reset-password" component={ResetPassword} />
            </React.Fragment>
        );
    }
}

export default ReactRouter;