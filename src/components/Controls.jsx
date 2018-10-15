import React, { Component } from 'react';
import './../style/Controls.css';

class Controls extends Component {
    handleClick(){
        alert('clicked');
    }
    render() { 
        return (
            <div id="controls">
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Start</button>
                <button type="button" className="btn btn-outline-danger" onClick={this.handleClick}>Clear</button>
            </div>
        );
    }
}

export default Controls;