import React, { Component } from 'react';
import './../style/Clock.css';

class Clock extends Component {
    formatSeconds(seconds){

        let min = Math.floor(seconds/60);
        let sec = seconds % 60;

        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        return <span id="clock-text">{min}:{sec}</span>
    }
    render() { 
        var {seconds} = this.props;
        return ( 
            <div className="clock-container">
                <div className="clock mx-auto">
                    {this.formatSeconds(seconds)}
                </div>
            </div>
        );
    }
}

export default Clock;