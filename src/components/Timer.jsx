import React, { Component } from 'react';

import './../style/Timer.css';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        }
    }
    componentDidMount(){
        var curr = Math.floor(Date.now()/1000);
        this.timer = setInterval(()=>{
            this.setState({
                seconds: Math.floor(Date.now()/1000) - curr
            });
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {
        var {seconds} = this.state;
        return (
            <div className="container">
                <h2 id="page-title">Timer App</h2>
                <Clock seconds={seconds}/>
                <Controls/>
            </div>
        );
    }
}

export default Timer;