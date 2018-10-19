import React, { Component } from 'react';
import './../style/Controls.css';

class Controls extends Component {
    onStatusChange(newStatus){
        this.props.onStatusChange(newStatus);
    }
    render() { 
        var {timerStatus} = this.props;

        // will render either start or pause button depending on status of program
        var renderingStartStop = () => {
            if(timerStatus === 'started'){
                return <button type="button" ref="buttons" className="btn btn-secondary" onClick={() => this.onStatusChange('paused')}>Pause</button>
            }else{
                return <button type="button" className="btn btn-primary" onClick={() => this.onStatusChange('started')}>Start</button>
            }
        }

        return (
            <div id="controls">
                {renderingStartStop()}
                <button type="button" className="btn btn-outline-danger" onClick={() => this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
}

export default Controls;