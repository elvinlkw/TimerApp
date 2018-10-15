import React, { Component } from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import './../style/Countdown.css';

class Countdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            countdown: 0,
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(totalSeconds){
        this.setState({
            countdown: totalSeconds
        });
    }
    render() { 
        var {countdown} = this.state;

        return ( 
            <div className="container">
                <h2 className="text-center" id="page-title">Countdown App</h2>
                <Clock seconds={countdown}/>
                <CountdownForm onFormSubmit={this.handleFormSubmit}/>
            </div>
        );
    }
}

export default Countdown;