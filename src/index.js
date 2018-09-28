import React from 'react';

import ReactDOM from 'react-dom';

import './assets/styles/index.css';
import registerServiceWorker from './services/registerServiceWorker';
import ReactRouter from "./routers";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <ReactRouter/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
