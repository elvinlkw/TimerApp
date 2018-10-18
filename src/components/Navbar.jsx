import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './../style/Navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" href="#">ReactTimer</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active-link" to="./">Timer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active-link" to="./countdown">Countdown</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="project">Project implemented by Elvin Li</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;