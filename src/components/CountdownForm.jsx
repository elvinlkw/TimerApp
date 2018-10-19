import React, { Component } from 'react';
import './../style/CountdownForm.css';

class CountdownForm extends Component {
    onFormSubmit(e){
        e.preventDefault();
        var seconds = this.refs.totalSeconds.value;
    
        // Test only numbers are used in the input field
        if(seconds.length > 0 && seconds.search(/^[0-9]*$/) > -1){
            this.props.onFormSubmit(seconds);
        } else if(seconds.length === 0){
            alert('Input Field Cannot Be Empty');
        } else{
            alert('Invalid Input');
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


