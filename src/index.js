import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component files
import Navbar from './components/Navbar';
import Countdown from './components/Countdown';
import Timer from './components/Timer';

ReactDOM.render(
    <div>
        <Router>
            <div>
                <Navbar/>
                <Route exact path="/" component={Timer}></Route>
                <Route exact path="/countdown" component={Countdown}></Route>
            </div>
        </Router>
    </div>,
    document.getElementById('root')
);