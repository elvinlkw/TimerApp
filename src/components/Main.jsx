import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Timer from './Timer';
import Countdown from './Countdown';

class Main extends Component {
    render() { 
        return (
            <Switch>
                <Route exact path="/" component={Timer}/>
                <Route exact path="/countdown" component={Countdown}/>
            </Switch>
        );
    }
}

export default Main;