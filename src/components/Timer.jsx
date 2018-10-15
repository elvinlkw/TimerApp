import React, { Component } from 'react';

import './../style/Timer.css';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            timerStatus: 'stopped'
        }
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.timerStatus !== prevState.timerStatus){
            switch (this.state.timerStatus){
                case 'started':
                    this.handleStart();
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'stopped':
                    this.setState({
                        seconds: 0
                    })
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
                    break
            }
        }
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    handleStatusChange(newStatus){
        this.setState({timerStatus: newStatus});
    }
    handleStart(){
        this.timer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }, 1000);
    }
    render() {
        var {seconds, timerStatus} = this.state;
        return (
            <div className="container">
                <h2 id="page-title">Timer App</h2>
                <Clock seconds={seconds}/>
                <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}

export default Timer;