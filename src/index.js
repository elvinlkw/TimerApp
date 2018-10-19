import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <App/>
    </Router>,
    document.getElementById('root')
);