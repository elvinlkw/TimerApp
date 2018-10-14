import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './../style/Navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">ReactTimer</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="./">Timer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./countdown">Countdown</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li>Project created by Elvin Li</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;