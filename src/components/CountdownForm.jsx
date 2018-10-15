import React, { Component } from 'react';
import './../style/CountdownForm.css';

class CountdownForm extends Component {
    onFormSubmit(e){
        e.preventDefault();
        var seconds = this.refs.totalSeconds.value;
        if(seconds.length > 0){
            this.refs.totalSeconds.value = '';
            this.props.onFormSubmit(seconds);
        }

    }
    render() { 
        return (
            <form className="form-group mx-auto" onSubmit={(e)=>this.onFormSubmit(e)}>
                <input type="text" className="form-control text-center" ref="totalSeconds" placeholder="Enter Countdown in seconds"/>
                <button className="btn btn-primary btn-block">Start</button>
            </form>
        );
    }
}

export default CountdownForm;


