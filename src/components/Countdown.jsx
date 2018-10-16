import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';
import CountdownForm from './CountdownForm';
import './../style/Countdown.css';

class Countdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            countdown: 0,
            timerStatus: 'stopped'
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }
    componentDidUpdate(prevProps, prevState){
        let currStatus = this.state.timerStatus;
        let prevStatus = prevState.timerStatus;

        if(currStatus !== prevStatus){
            switch(currStatus){
                case 'started':
                    this.handleStartCountdown();
                    break;
                case 'stopped':
                    this.setState({
                        countdown: 0
                    })
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
                    break;
            }
        }

    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    handleStartCountdown(){
        this.timer = setInterval(() => {
            var secondsRemaining = this.state.countdown - 1;
            this.setState({
                countdown: secondsRemaining > 0 ? secondsRemaining : 0
            })
            if(secondsRemaining === 0){
                this.setState({timerStatus: 'stopped'})
            }
        }, 1000);
    }
    handleFormSubmit(totalSeconds){
        this.setState({
            countdown: totalSeconds,
            timerStatus: 'submitted'
        });
    }
    handleStatusChange(newStatus){
        this.setState({timerStatus: newStatus});
    }
    render() { 
        var {countdown, timerStatus} = this.state;

        var renderControls = () => {
            if(timerStatus === 'stopped'){
                return <CountdownForm onFormSubmit={this.handleFormSubmit}/>
            } else if(timerStatus === 'submitted'){
                return <Controls timerStatus='stopped' onStatusChange={this.handleStatusChange}/>
            } else{
                return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            }
        };

        return ( 
            <div className="container">
                <h2 className="text-center" id="page-title">Countdown App</h2>
                <Clock seconds={countdown}/>
                {renderControls()}
            </div>
        );
    }
}

export default Countdown;