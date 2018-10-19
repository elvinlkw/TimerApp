import React, { Component } from 'react';
import './../style/CountdownForm.css';

class CountdownForm extends Component {
    onFormSubmit(e){
        e.preventDefault();
        var seconds = this.refs.totalSeconds.value;
    
        // Test only numbers are used in the input field and 
        // input field cannot be empty
        if(seconds.length < 1){
            alert('Input field cannot be empty');
        } else if (seconds.search(/^[0-9]*$/) < 0){
            alert('Invalid Input: only numbers can be input');
        } else{
            this.props.onFormSubmit(seconds);
        }
        this.refs.totalSeconds.value = '';
        this.refs.totalSeconds.focus();

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


